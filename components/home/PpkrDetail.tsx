// components/home/PpkrDetail.tsx
'use client';

import BackBar from '@/components/shared/BackBar';
import { Leaf } from 'lucide-react';

export default function PpkrDetail({ onBack }: { onBack: () => void }) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5">
      <BackBar onBack={onBack} />
      <div className="flex items-center gap-3">
        <Leaf className="w-6 h-6 text-emerald-600" />
        <h2 className="text-xl font-bold">Profil PPKR (Pabrik Pengolahan Karet)</h2>
      </div>
      <p className="text-sm text-slate-500 mt-1">Detail profil PPKR (dummy).</p>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="font-semibold mb-2">Informasi Umum</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li><span className="font-medium">Jenis Produk:</span> RSS, SIR 20</li>
            <li><span className="font-medium">Kapasitas:</span> 120 ton/bulan</li>
            <li><span className="font-medium">Standar Mutu:</span> SNI & buyer spec</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="font-semibold mb-2">Catatan Operasional</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
            <li>Perbaikan jalur pengasapan tahap 2</li>
            <li>Penggantian pompa lateks selesai</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
