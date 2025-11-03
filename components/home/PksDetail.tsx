// components/home/PksDetail.tsx
'use client';

import { Factory } from 'lucide-react';
import BackBar from '@/components/shared/BackBar';
import type { PksDetail } from '@/lib/types';

export default function PksDetailView({
  detail,
  onBack,
}: {
  detail: PksDetail;
  onBack: () => void;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5">
      <BackBar onBack={onBack} />
      <div className="flex items-center gap-3">
        <Factory className="w-6 h-6 text-emerald-600" />
        <h2 className="text-xl font-bold">{detail.nama}</h2>
      </div>
      <p className="text-sm text-slate-500 mt-1">Detail profil pabrik (dummy).</p>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="font-semibold mb-2">Informasi Umum</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li><span className="font-medium">Jenis:</span> {detail.infoUmum.jenis}</li>
            <li><span className="font-medium">Alamat:</span> {detail.infoUmum.alamat}</li>
            <li><span className="font-medium">Kapasitas:</span> {detail.infoUmum.kapasitasTbsPerJam} TBS/jam</li>
            <li><span className="font-medium">Tahun Operasional:</span> {detail.infoUmum.tahunOperasional}</li>
            <li><span className="font-medium">Jumlah Line:</span> {detail.infoUmum.jumlahLine}</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="font-semibold mb-2">Catatan Operasional</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
            {detail.catatan.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
