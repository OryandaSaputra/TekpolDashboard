import { Boxes, Filter } from 'lucide-react';


export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-[1400px] px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3 font-semibold">
          <Boxes className="w-6 h-6 text-emerald-600" />
          <span>Dashboard Teknik & Pengolahan</span>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
          title="Filter (placeholder)"
        >
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>
    </header>
  );
}