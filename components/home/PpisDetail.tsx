// components/home/PpisDetail.tsx
'use client';

import BackBar from '@/components/shared/BackBar';
import { Package2 } from 'lucide-react';

export default function PpisDetail({ onBack }: { onBack: () => void }) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5">
      <BackBar onBack={onBack} />
      <div className="flex items-center gap-3">
        <Package2 className="w-6 h-6 text-emerald-600" />
        <h2 className="text-xl font-bold">Profil PPIS (Kernel Crushing Plant)</h2>
      </div>
      <p className="text-sm text-slate-500 mt-1">Detail profil PPIS (dummy).</p>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="font-semibold mb-2">Informasi Umum</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li><span className="font-medium">Lokasi:</span> Kandis, Siak</li>
            <li><span className="font-medium">Kapasitas Inti:</span> 400 ton/hari</li>
            <li><span className="font-medium">Produk:</span> CPKO, PKE</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="font-semibold mb-2">Catatan Operasional</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
            <li>Optimasi efisiensi screw press dan cake breaker</li>
            <li>Audit energi kompresor udara selesai Q3</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
