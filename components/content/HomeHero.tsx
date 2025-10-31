import { Info, ShieldCheck, Sparkles } from 'lucide-react';


export default function HomeHero() {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-black/10 blur-2xl" />
        <div className="relative px-6 py-10">
          <div className="text-2xl sm:text-3xl font-extrabold drop-shadow">Selamat Datang di Dashboard Teknik dan Pengolahan</div>
          <p className="mt-2 text-emerald-50/90 max-w-3xl">
            Akses cepat dokumen lintas divisi melalui sidebar di sisi kiri. Sebelum membuka tautan Google Drive,
            Anda akan diminta mengisi formulir permohonan singkat.
          </p>
        </div>
      </section>


      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">Akses Cepat</div>
              <p className="text-sm text-slate-500 mt-1">Temukan dokumen di submenu <b>Pengolahan → Tukang olah</b> atau kategori lain.</p>
            </div>
          </div>
        </div>


        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-900/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">Verifikasi Ringan</div>
              <p className="text-sm text-slate-500 mt-1">Setiap tautan melewati popup form permohonan untuk pencatatan.</p>
            </div>
          </div>
        </div>


        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/30">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">Catatan</div>
              <p className="text-sm text-slate-500 mt-1">Ini adalah versi demo satu halaman untuk pratinjau tampilan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}