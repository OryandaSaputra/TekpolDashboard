'use client';

import React, { useMemo, useState } from 'react';
import { Boxes, Filter, Search, ExternalLink } from 'lucide-react';
import Sidebar from '@/components/layout/Sidebar';
import ContentGrid from '@/components/content/ContentGrid';
import { CONTENT_MAP } from '@/lib/constant';
import { LinkItem, PathKey } from '@/lib/types';

const cls = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(' ');

export default function Page() {
  const [activeKey, setActiveKey] = useState<PathKey>('home');
  const [search, setSearch] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [pendingItem, setPendingItem] = useState<LinkItem | null>(null);
  const [sending, setSending] = useState(false);

  const content = CONTENT_MAP[activeKey] ?? { title: 'Tidak ditemukan', items: [] };

  // Filter: dukung pencarian pada title/desc/tag; jika grup, filter turunannya
  const filtered = useMemo(() => {
    if (!search) return content.items;
    const q = search.toLowerCase();

    return content.items
      .map((it) => {
        if (!it.children?.length) {
          const hit =
            it.title.toLowerCase().includes(q) ||
            it.desc?.toLowerCase().includes(q) ||
            it.tag?.toLowerCase().includes(q);
          return hit ? it : null;
        }
        // grup: cocok jika judul grup match atau ada child match
        const groupHit = it.title.toLowerCase().includes(q);
        const childMatches = it.children.filter(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            c.desc?.toLowerCase().includes(q) ||
            c.tag?.toLowerCase().includes(q)
        );
        if (groupHit) return it; // tampilkan grup utuh
        if (childMatches.length) return { ...it, children: childMatches };
        return null;
      })
      .filter(Boolean) as LinkItem[];
  }, [content.items, search]);

  function openRequestForm(item: LinkItem) {
    if (!item.href && !item.children?.length) return; // guard
    // hanya leaf (punya href) yang memunculkan form.
    if (item.href) {
      setPendingItem(item);
      setFormOpen(true);
    }
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!pendingItem?.href) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFormOpen(false);
      window.open(pendingItem.href!, '_blank', 'noopener,noreferrer');
    }, 900);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
      {/* HEADER */}
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

      {/* BODY */}
      <div className="mx-auto max-w-[1400px] px-2 sm:px-4 py-4 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
        {/* SIDEBAR */}
        <Sidebar activeKey={activeKey} onSelect={setActiveKey} />

        {/* MAIN CONTENT */}
        <main className="space-y-4">
          {activeKey === 'home' ? (
            <>
              <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-black/10 blur-2xl" />
                <div className="relative px-6 py-10">
                  <div className="text-2xl sm:text-3xl font-extrabold drop-shadow">
                    Selamat Datang di Dashboard Teknik dan Pengolahan
                  </div>
                  <p className="mt-2 text-emerald-50/90 max-w-3xl">
                    Akses cepat dokumen lintas divisi melalui sidebar di sisi kiri.
                    Sebelum membuka tautan Google Drive, Anda akan diminta mengisi formulir permohonan singkat.
                  </p>
                </div>
              </section>
            </>
          ) : (
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h1 className="text-xl font-bold">{content.title}</h1>
                  {content.subtitle && <p className="text-sm text-slate-500 mt-1">{content.subtitle}</p>}
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cari dokumen…"
                    className="pl-9 pr-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm outline-none focus:ring-2 ring-emerald-500/40"
                  />
                </div>
              </div>

              <ContentGrid items={filtered} onRequest={openRequestForm} />
            </section>
          )}
        </main>
      </div>

      {/* MODAL FORM PERMOHONAN */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => !sending && setFormOpen(false)} />
          <div className="relative w-full sm:max-w-lg bg-white dark:bg-slate-900 rounded-t-2xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
            <h3 className="text-lg font-bold">Form Permohonan Akses</h3>
            <p className="text-sm text-slate-500 mt-1">Silakan isi data berikut sebelum membuka dokumen.</p>

            <form onSubmit={submitForm} className="mt-4 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-500">Nama</label>
                  <input required className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500/40" />
                </div>
                <div>
                  <label className="text-xs text-slate-500">NIP/NRP</label>
                  <input required className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500/40" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-500">Unit / Divisi</label>
                  <input required className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500/40" />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Email</label>
                  <input type="email" required className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500/40" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-500">No. HP</label>
                  <input required className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500/40" />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Tujuan Akses</label>
                  <select required className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500/40">
                    <option value="">Pilih</option>
                    <option>Review Dokumen</option>
                    <option>Input Data</option>
                    <option>Audit</option>
                    <option>Presentasi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500">Catatan</label>
                <textarea rows={3} className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500/40" placeholder={pendingItem ? `Contoh: Mohon akses untuk "${pendingItem.title}"` : undefined} />
              </div>

              <div className="flex items-center justify-end pt-2 gap-2">
                <button type="button" onClick={() => !sending && setFormOpen(false)} className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm" disabled={sending}>
                  Batal
                </button>
                <button
                  type="submit"
                  className={cls('px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm inline-flex items-center gap-2', sending && 'opacity-70 cursor-not-allowed')}
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/60 border-b-transparent animate-spin" />
                      Mengirim…
                    </>
                  ) : (
                    <>
                      Ajukan & Lanjutkan
                      <ExternalLink className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
