'use client';

import React, { useState } from 'react';
import { Home, Factory, ChevronDown, ChevronRight, FolderOpen, FileText, AppWindow, Images } from 'lucide-react';
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
        <span className="text-sm font-medium text-left">Home</span>
      </button>

      {/* Pengolahan */}
      <div className="mt-2">
        <button
          onClick={() => setOpenPengolahan((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openPengolahan ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <Factory className="w-4 h-4" />
          <span className="text-sm font-semibold text-left leading-snug">Pengolahan</span>
        </button>

        {openPengolahan && (
          <div className="ml-7 mt-1 space-y-1">
            {/* Tukang olah — BUKAN DROPDOWN LAGI */}
            <button
              onClick={() => onSelect('pengolahan/tukangolah' as PathKey)}
              className={cls(
                'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                activeKey === ('pengolahan/tukangolah' as PathKey) && 'bg-slate-100 dark:bg-slate-800'
              )}
            >
              <FileText className="w-4 h-4" />
              <span className="font-medium text-left">Tukang olah</span>
            </button>
          </div>
        )}
      </div>

      {/* Investasi & Eksploitasi Pabrik */}
      <div className="mt-2">
        <button
          onClick={() => setOpenInvestasi((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {openInvestasi ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <FolderOpen className="w-4 h-4" />
          {/* pastikan rata kiri */}
          <span className="text-sm font-semibold text-left leading-snug whitespace-normal break-words">
            Investasi dan Eksploitasi Pabrik
          </span>
        </button>
        {openInvestasi && (
          <div className="ml-7 mt-1 space-y-1">
            <button
              onClick={() => onSelect('investasi/sub-instalasi-pks' as PathKey)}
              className={cls(
                'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                activeKey === ('investasi/sub-instalasi-pks' as PathKey) && 'bg-slate-100 dark:bg-slate-800'
              )}
            >
              <FileText className="w-4 h-4" />
              <span className="font-medium text-left">Sub Instalasi PKS</span>
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
          {openTeknik ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <FolderOpen className="w-4 h-4" />
          <span className="text-sm font-semibold text-left leading-snug">Teknik dan Infrastruktur</span>
        </button>
        {openTeknik && (
          <div className="ml-7 mt-1 space-y-1">
            <button
              onClick={() => onSelect('teknik/sub' as PathKey)}
              className={cls(
                'w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-slate-50 dark:hover:bg-slate-800',
                activeKey === ('teknik/sub' as PathKey) && 'bg-slate-100 dark:bg-slate-800'
              )}
            >
              <FileText className="w-4 h-4" />
              <span className="font-medium text-left">Sub Teknik dan Infrastruktur</span>
            </button>
          </div>
        )}
      </div>

      {/* Tekpol Apps */}
      <div className="mt-2">
        <button
          onClick={() => onSelect('tekpol-apps' as PathKey)}
          className={cls(
            'w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800',
            activeKey === ('tekpol-apps' as PathKey) && 'bg-slate-100 dark:bg-slate-800'
          )}
        >
          <AppWindow className="w-4 h-4" />
          <span className="text-sm font-semibold text-left leading-snug">Apps HO dan Regional</span>
        </button>
      </div>

      {/* Galeri (menu baru) */}
      <div className="mt-2">
        <button
          onClick={() => onSelect('galeri' as PathKey)}
          className={cls(
            'w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800',
            activeKey === ('galeri' as PathKey) && 'bg-slate-100 dark:bg-slate-800'
          )}
        >
          <Images className="w-4 h-4" />
          <span className="text-sm font-semibold text-left leading-snug">Galeri</span>
        </button>
      </div>
    </aside>
  );
}
