"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState, type ChangeEvent } from "react";

type Role = "PKWT" | "KARYAWAN" | "KASUBAG" | "KABAG" | "GUEST";
type Decision = "PENDING" | "APPROVED" | "REJECTED";
type Category = "HO" | "REGIONAL";

type App = { id: string; name: string; category: Category; username: string; password: string; description?: string | null };
type User = { id: string; name: string; email?: string | null };
type Approval = { id: string; requestId: string; approverId: string; role: Role; decision: Decision; note?: string | null; decidedAt?: string | Date | null; approver?: User };
type Request = { id: string; type: "PKWT" | "GUEST"; appId: string; requesterId: string; picId?: string | null; reason?: string | null; division?: string | null; status: Decision; rejectionNote?: string | null };

type Row = Request & { app: App; requester: User; approvals: (Approval & { approver: User })[]; pic: User | null };

export default function ApprovalClient({ role, rows }: { role: Role; rows: Row[] }) {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [action, setAction] = useState<Decision>("REJECTED");

  const askNote = (id: string, kind: Decision) => {
    setActiveId(id);
    setAction(kind);
    setNote("");
    setOpen(true);
  };

  const onNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => setNote(e.target.value);

  const submit = async () => {
    if (!activeId) return;
    if (action === "REJECTED" && !note.trim()) return alert("Catatan wajib diisi saat menolak.");
    const res = await fetch(`/api/requests/${activeId}/approve`, {
      method: "POST",
      body: JSON.stringify({ decision: action === "APPROVED" ? "APPROVED" : "REJECTED", note }),
      headers: { "Content-Type": "application/json" },
    });
    setOpen(false);
    if (res.ok) location.reload();
    else alert("Gagal update.");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Approval <span className="text-sm text-gray-500">({role})</span></h1>
      <Card>
        <CardHeader><CardTitle>Daftar Permohonan</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {rows.map((r) => (
            <div key={r.id} className="grid md:grid-cols-6 gap-2 items-center p-3 rounded border">
              <div className="col-span-2">
                <div className="font-medium">{r.app.name}</div>
                <div className="text-xs text-gray-500">Pemohon: {r.requester.name}</div>
                {r.type === "PKWT" && <div className="text-xs text-gray-500">PIC: {r.pic?.name}</div>}
              </div>
              <div><span className="text-sm">{r.type}</span></div>
              <div><span className="text-sm">{r.status}</span></div>
              <div className="text-xs">
                {r.approvals.map((a) => (
                  <div key={a.id}>
                    {a.role}: <b>{a.decision}</b> {a.note ? `— ${a.note}` : ""}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="secondary" onClick={() => askNote(r.id, "APPROVED")}>Terima</Button>
                <Button variant="destructive" onClick={() => askNote(r.id, "REJECTED")}>Tolak</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{action === "APPROVED" ? "Terima" : "Tolak"} Permohonan</DialogTitle></DialogHeader>
          <Textarea placeholder={action === "APPROVED" ? "Catatan (opsional)" : "Catatan (wajib)"} value={note} onChange={onNoteChange} />
          <div className="flex justify-end gap-2 mt-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>Batal</Button>
            <Button onClick={submit}>{action === "APPROVED" ? "Terima" : "Tolak"}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
