'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, FileText, FolderOpen } from 'lucide-react';
import { LinkItem } from '@/lib/types';
import { cls } from '@/lib/utils';

export default function ContentGrid({
  items,
  onRequest,
}: {
  items: LinkItem[];
  onRequest: (item: LinkItem) => void;
}) {
  if (!items?.length) {
    return <div className="text-center text-slate-500 py-10">Tidak ada dokumen yang cocok.</div>;
  }

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) =>
        it.children?.length ? (
          <GroupCard key={it.id} item={it} onRequest={onRequest} />
        ) : (
          <ItemCard key={it.id} item={it} onRequest={onRequest} />
        )
      )}
    </div>
  );
}

function GroupCard({ item, onRequest }: { item: LinkItem; onRequest: (i: LinkItem) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-t-2xl hover:bg-slate-50 dark:hover:bg-slate-800"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600">
            <FolderOpen className="w-5 h-5" />
          </div>
          <h3 className="font-semibold leading-tight">{item.title}</h3>
        </div>
        {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      {open && (
        <div className="px-4 pb-4 pt-2 space-y-2">
          {item.children!.map((c) => (
            <button
              key={c.id}
              onClick={() => onRequest(c)}
              className="w-full inline-flex items-center justify-between gap-2 rounded-lg px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              <span className="inline-flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {c.title}
              </span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </button>
          ))}
        </div>
      )}
    </article>
  );
}

function ItemCard({ item, onRequest }: { item: LinkItem; onRequest: (i: LinkItem) => void }) {
  return (
    <article className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-4 hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600">
          <FileText className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold leading-tight">{item.title}</h3>
          {item.desc && <p className="text-sm text-slate-500 mt-1 truncate">{item.desc}</p>}
          {item.tag && (
            <div className="mt-2">
              <span className="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                {item.tag}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => onRequest(item)}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Ajukan & Buka
          <ExternalLink className="w-4 h-4" />
        </button>
        <a
          href={item.href}
          target="_blank"
          className="text-xs text-slate-400 hover:text-slate-500 underline underline-offset-4"
          rel="noreferrer"
          onClick={(e) => {
            e.preventDefault();
            onRequest(item);
          }}
        >
          lihat tautan
        </a>
      </div>
    </article>
  );
}
