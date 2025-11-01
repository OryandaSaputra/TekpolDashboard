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
  const [openTukangOlah, setOpenTukangOlah] = useState(true);
  const [openProduksi, setOpenProduksi] = useState(true);
  const [openEvaluasi, setOpenEvaluasi] = useState(false);

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
        <Home className="w-4 h-4 shrink-0" />
        <span className="flex-1 text-left text-sm font-medium whitespace-normal leading-snug">
          Home
        </span>
      </button>

      {/* Pengolahan */}
      <div className="mt-2">
        <button
          onClick={() => setOpenPengolahan((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openPengolahan ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
          <Factory className="w-4 h-4 shrink-0" />
          <span className="flex-1 text-left text-sm font-semibold whitespace-normal leading-snug">
            Pengolahan
          </span>
        </button>

        {openPengolahan && (
          <div className="ml-7 mt-1 space-y-1">
            {/* Tukang Olah */}
            <button
              onClick={() => setOpenTukangOlah((v) => !v)}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {openTukangOlah ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
              <span className="flex-1 text-left font-medium whitespace-normal leading-snug">
                Tukang olah
              </span>
            </button>

            {openTukangOlah && (
              <div className="ml-6 space-y-1">
                {/* Produksi (dropdown: PKS & PKR) */}
                <button
                  onClick={() => setOpenProduksi((v) => !v)}
                  className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {openProduksi ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
                  <span className="flex-1 text-left whitespace-normal leading-snug">Produksi</span>
                </button>

                {openProduksi && (
                  <div className="ml-6 space-y-1">
                    <button
                      onClick={() => onSelect('pengolahan/tukangolah/produksi/pks' as PathKey)}
                      className={cls(
                        'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                        activeKey === 'pengolahan/tukangolah/produksi/pks' && 'bg-slate-100 dark:bg-slate-800'
                      )}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span className="flex-1 text-left whitespace-normal leading-snug">PKS</span>
                    </button>

                    <button
                      onClick={() => onSelect('pengolahan/tukangolah/produksi/pkr' as PathKey)}
                      className={cls(
                        'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                        activeKey === 'pengolahan/tukangolah/produksi/pkr' && 'bg-slate-100 dark:bg-slate-800'
                      )}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span className="flex-1 text-left whitespace-normal leading-snug">PKR</span>
                    </button>
                  </div>
                )}

                {[
                  ['biaya-olah-lm', 'Biaya Olah LM'],
                  ['laporan-technical-service-eon', 'Laporan Technical Service EON'],
                  ['rkap-2026', 'RKAP 2026'],
                  ['rkap-2025', 'RKAP 2025'],
                  ['izin-la', 'IZIN LA'],
                  ['sop-ik-palmco', 'SOP/IK Palmco'],
                  ['draft-monthly', 'Draft Monthly'],
                ].map(([key, label]) => {
                  const path = `pengolahan/tukangolah/${key}` as PathKey;
                  return (
                    <button
                      key={path}
                      onClick={() => onSelect(path)}
                      className={cls(
                        'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                        activeKey === path && 'bg-slate-100 dark:bg-slate-800'
                      )}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span className="flex-1 text-left whitespace-normal leading-snug">{label}</span>
                    </button>
                  );
                })}

                {/* Evaluasi Berjenjang */}
                <button
                  onClick={() => setOpenEvaluasi((v) => !v)}
                  className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {openEvaluasi ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
                  <span className="flex-1 text-left whitespace-normal leading-snug">Evaluasi Berjenjang</span>
                </button>

                {openEvaluasi && (
                  <div className="ml-6 space-y-1">
                    <button
                      onClick={() => onSelect('pengolahan/tukangolah/evaluasi-berjenjang/oktober' as PathKey)}
                      className={cls(
                        'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                        activeKey === 'pengolahan/tukangolah/evaluasi-berjenjang/oktober' &&
                        'bg-slate-100 dark:bg-slate-800'
                      )}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span className="flex-1 text-left whitespace-normal leading-snug">Oktober</span>
                    </button>
                  </div>
                )}

                {[
                  ['buku-kalibrasi-storage', 'Buku Kalibrasi Storage'],
                  ['digitalisasi', 'Digitalisasi'],
                  ['ba-stokopname', 'BA Stokopname'],
                  ['stok-gudang-barang', 'Stok Gudang Barang'],
                  ['kontrak', 'Kontrak'],
                  ['instalasi', 'Instalasi'],
                  ['aplikasi', 'Aplikasi'],
                ].map(([key, label]) => {
                  const path = `pengolahan/tukangolah/${key}` as PathKey;
                  return (
                    <button
                      key={path}
                      onClick={() => onSelect(path)}
                      className={cls(
                        'w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-sm',
                        activeKey === path && 'bg-slate-100 dark:bg-slate-800'
                      )}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span className="flex-1 text-left whitespace-normal leading-snug">{label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Investasi & Eksploitasi Pabrik */}
      <div className="mt-2">
        <button
          onClick={() => setOpenInvestasi((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openInvestasi ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
          <FolderOpen className="w-4 h-4 shrink-0" />
          {/* Perbaikan rata kiri & wrapping yang rapi */}
          <span className="flex-1 text-left text-sm font-semibold whitespace-normal leading-snug">
            Investasi dan Eksploitasi Pabrik
          </span>
        </button>

        {openInvestasi && (
          <div className="ml-7 mt-1 space-y-1">
            <button
              onClick={() => onSelect('investasi/sub-instalasi-pks' as PathKey)}
              className={cls(
                'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                activeKey === 'investasi/sub-instalasi-pks' && 'bg-slate-100 dark:bg-slate-800'
              )}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left whitespace-normal leading-snug">Sub Instalasi PKS</span>
            </button>
          </div>
        )}
      </div>

      {/* Teknik & Infrastruktur */}
      <div className="mt-2">
        <button
          onClick={() => setOpenTeknik((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openTeknik ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
          <FolderOpen className="w-4 h-4 shrink-0" />
          <span className="flex-1 text-left text-sm font-semibold whitespace-normal leading-snug">
            Teknik dan Infrastruktur
          </span>
        </button>

        {openTeknik && (
          <div className="ml-7 mt-1 space-y-1">
            {['a', 'b', 'c'].map((k) => {
              const path = `teknik/${k}` as PathKey;
              return (
                <button
                  key={path}
                  onClick={() => onSelect(path)}
                  className={cls(
                    'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                    activeKey === path && 'bg-slate-100 dark:bg-slate-800'
                  )}
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span className="flex-1 text-left whitespace-normal leading-snug">{k.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
