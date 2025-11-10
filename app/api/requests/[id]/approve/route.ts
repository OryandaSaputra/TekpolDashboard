// app/api/requests/[id]/approve/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const runtime = 'nodejs'; // Prisma wajib Node.js runtime

const Body = z.object({
  decision: z.enum(['APPROVED', 'REJECTED']),
  note: z.string().optional(),
});

export async function POST(
  req: Request,
  ctx: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  const approverId = session?.user?.id;
  if (!approverId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { decision, note } = Body.parse(await req.json());

  const reqRow = await prisma.request.findUnique({
    where: { id: ctx.params.id },
    select: { id: true },
  });
  if (!reqRow) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const approval = await prisma.approval.findFirst({
    where: { requestId: reqRow.id, approverId },
    select: { id: true },
  });
  if (!approval) {
    return NextResponse.json(
      { error: 'Tidak berwenang approve request ini.' },
      { status: 403 }
    );
  }

  await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.approval.update({
      where: { id: approval.id },
      data: { decision, note, decidedAt: new Date() },
    });

    const approvals = await tx.approval.findMany({
      where: { requestId: reqRow.id },
      select: { decision: true },
    });

    const anyRejected = approvals.some(a => a.decision === 'REJECTED');
    if (anyRejected) {
      await tx.request.update({
        where: { id: reqRow.id },
        data: { status: 'REJECTED', rejectionNote: note ?? null },
      });
      return;
    }

    const allApproved = approvals.every(a => a.decision === 'APPROVED');
    await tx.request.update({
      where: { id: reqRow.id },
      data: allApproved
        ? { status: 'APPROVED', rejectionNote: null }
        : { status: 'PENDING' },
    });
  });

  return NextResponse.json({ ok: true });
}
