'use client';

import React, { useState } from 'react';
import { Home, Factory, ChevronDown, ChevronRight, FolderOpen, FileText } from 'lucide-react';
import { PathKey } from '@/lib/types';
import { cls } from '@/lib/utils';

export default function Sidebar({
  activeKey,
  onSelect,
}: {
  activeKey: PathKey;
  onSelect: (k: PathKey) => void;
}) {
  const [openPengolahan, setOpenPengolahan] = useState(true);
  const [openInvestasi, setOpenInvestasi] = useState(false);
  const [openTeknik, setOpenTeknik] = useState(false);
  const [openPembelian, setOpenPembelian] = useState(false);

  const [openTukangOlah, setOpenTukangOlah] = useState(true);
  const [openProduksi, setOpenProduksi] = useState(true);
  const [openEvaluasi, setOpenEvaluasi] = useState(true);

  return (
    <aside className="rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-3 h-fit sticky top-16">
      <div className="px-3 py-2 mb-2">
        <div className="text-xs uppercase tracking-wide text-slate-500">Navigasi</div>
      </div>

      {/* Home */}
      <button
        onClick={() => onSelect('home')}
        className={cls(
          'w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800',
          activeKey === 'home' && 'bg-slate-100 dark:bg-slate-800'
        )}
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Home</span>
      </button>

      {/* Pengolahan */}
      <div className="mt-2">
        <button
          onClick={() => setOpenPengolahan((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openPengolahan ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <Factory className="w-4 h-4" />
          <span className="text-sm font-semibold">Pengolahan</span>
        </button>

        {openPengolahan && (
          <div className="ml-7 mt-1 space-y-1">
            {/* Tukang olah */}
            <button
              onClick={() => setOpenTukangOlah((v) => !v)}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {openTukangOlah ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              <span className="font-medium">Tukang olah</span>
            </button>

            {openTukangOlah && (
              <div className="ml-6 space-y-1">
                {/* Produksi parent */}
                <button
                  onClick={() => setOpenProduksi((v) => !v)}
                  className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {openProduksi ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  <span>Produksi</span>
                </button>
                {openProduksi && (
                  <div className="ml-5 space-y-1">
                    {([
                      ['pks', 'PKS'],
                      ['pkr', 'PKR'],
                    ] as const).map(([sub, label]) => {
                      const path = `pengolahan/tukangolah/produksi/${sub}` as PathKey;
                      const active = activeKey === path;
                      return (
                        <button
                          key={path}
                          onClick={() => onSelect(path)}
                          className={cls(
                            'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                            active && 'bg-slate-100 dark:bg-slate-800'
                          )}
                        >
                          <FileText className="w-4 h-4" />
                          <span>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {([
                  ['biaya-olah-lm', 'Biaya Olah LM'],
                  ['laporan-technical-service-eon', 'Laporan Technical Service EON'],
                  ['rkap-2026', 'RKAP 2026'],
                  ['rkap-2025', 'RKAP 2025'],
                  ['izin-la', 'IZIN LA'],
                  ['sop-ik-palmco', 'SOP/IK Palmco'],
                  ['draft-monthly', 'Draft Montly'],
                ] as const).map(([key, label]) => {
                  const path = `pengolahan/tukangolah/${key}` as PathKey;
                  const active = activeKey === path;
                  return (
                    <button
                      key={path}
                      onClick={() => onSelect(path)}
                      className={cls(
                        'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                        active && 'bg-slate-100 dark:bg-slate-800'
                      )}
                    >
                      <FileText className="w-4 h-4" />
                      <span>{label}</span>
                    </button>
                  );
                })}

                {/* Evaluasi Berjenjang */}
                <button
                  onClick={() => setOpenEvaluasi((v) => !v)}
                  className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {openEvaluasi ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  <span>Evaluasi Berjenjang</span>
                </button>
                {openEvaluasi && (
                  <div className="ml-5 space-y-1">
                    {([['oktober', 'Oktober']] as const).map(([sub, label]) => {
                      const path = `pengolahan/tukangolah/evaluasi-berjenjang/${sub}` as PathKey;
                      const active = activeKey === path;
                      return (
                        <button
                          key={path}
                          onClick={() => onSelect(path)}
                          className={cls(
                            'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                            active && 'bg-slate-100 dark:bg-slate-800'
                          )}
                        >
                          <FileText className="w-4 h-4" />
                          <span>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* INVESTASI & EKSPL. PABRIK */}
      <div className="mt-2">
        <button
          onClick={() => setOpenInvestasi((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openInvestasi ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <FolderOpen className="w-4 h-4" />
          <span className="text-sm font-semibold">Investasi dan Eksploitasi Pabrik</span>
        </button>

        {openInvestasi && (
          <div className="ml-7 mt-1 space-y-1">
            {/* SUBMENU: Sub Instalasi PKS */}
            <button
              onClick={() => onSelect('investasi/sub-instalasi-pks' as PathKey)}
              className={cls(
                'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                activeKey === 'investasi/sub-instalasi-pks' && 'bg-slate-100 dark:bg-slate-800'
              )}
            >
              <FileText className="w-4 h-4" />
              <span className="font-medium">Sub Instalasi PKS</span>
            </button>
          </div>
        )}
      </div>

      {/* TEKNIK & PEMBELIAN (placeholder) */}
      <div className="mt-2">
        <button
          onClick={() => setOpenTeknik((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openTeknik ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <FolderOpen className="w-4 h-4" />
          <span className="text-sm font-semibold">Teknik dan Infrastruktur</span>
        </button>
        {openTeknik && (
          <div className="ml-7 mt-1 space-y-1">
            {['a', 'b', 'c'].map((k) => {
              const path = `teknik/${k}` as PathKey;
              const active = activeKey === path;
              return (
                <button
                  key={path}
                  onClick={() => onSelect(path)}
                  className={cls(
                    'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                    active && 'bg-slate-100 dark:bg-slate-800'
                  )}
                >
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">{k.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-2">
        <button
          onClick={() => setOpenPembelian((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openPembelian ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <FolderOpen className="w-4 h-4" />
          <span className="text-sm font-semibold">Pembelian TBS</span>
        </button>
        {openPembelian && (
          <div className="ml-7 mt-1 space-y-1">
            {['a', 'b', 'c'].map((k) => {
              const path = `pembelian/${k}` as PathKey;
              const active = activeKey === path;
              return (
                <button
                  key={path}
                  onClick={() => onSelect(path)}
                  className={cls(
                    'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                    active && 'bg-slate-100 dark:bg-slate-800'
                  )}
                >
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">{k.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
