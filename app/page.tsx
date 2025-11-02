'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  FolderOpen,
  ShieldCheck,
  Sparkles,
  Image as ImageIcon,
  ExternalLink,
  FileText,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Sidebar from '@/components/layout/Sidebar';
import ContentGrid from '@/components/content/ContentGrid';
import AppHeader from '@/components/layout/AppHeader';

import { CONTENT_MAP } from '@/lib/constants';
import type { PathKey, LinkItem } from '@/lib/types';

// ---------- Type guard untuk item ber-children (hindari `any`) ----------
type GroupItem = { id: string; title: string; children: LinkItem[] };

function isGroupItem(it: unknown): it is GroupItem {
  return (
    typeof it === 'object' &&
    it !== null &&
    'children' in it &&
    Array.isArray((it as { children: unknown }).children)
  );
}

// ====== HOME SECTION ======
function HomeSection() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-linear-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white"
      >
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-black/10 blur-2xl" />

        <div className="relative px-6 py-10">
          <div className="text-2xl sm:text-3xl font-extrabold drop-shadow">
            Selamat Datang di Dashboard Teknik & Pengolahan
          </div>
          <p className="mt-2 text-emerald-50/90 max-w-3xl">
            Pusat akses dokumen lintas divisi: Produksi, Teknik, dan Investasi. Gunakan menu di kiri untuk membuka
            koleksi dokumen kerja dan aplikasi pendukung.
          </p>
          <div className="mt-4 text-emerald-50/90 max-w-3xl">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Akses cepat ke Google Drive, spreadsheet, dan aplikasi internal.</li>
              <li>Struktur menu yang rapi dan mudah dinavigasi.</li>
              <li>Semua tautan dibuka langsung tanpa formulir permohonan.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">Akses Cepat</div>
              <p className="text-sm text-slate-500 mt-1">
                Temukan dokumen di <b>Pengolahan</b>, <b>Investasi</b>, dan <b>Teknik</b> langsung dari sidebar.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-900/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">Terstandar</div>
              <p className="text-sm text-slate-500 mt-1">
                Link resmi, struktur konsisten, dan siap dikembangkan untuk akses berbasis role.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/30">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">Dokumentasi Tim</div>
              <p className="text-sm text-slate-500 mt-1">
                Kegiatan & momen kebersamaan turut kami tampilkan di beranda.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery (2 foto) */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-4 grid md:grid-cols-2 gap-4"
      >
        {/* Card Foto 1 */}
        <motion.figure
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900"
        >
          <div className="relative aspect-video w-full">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            >
              <Image
                src="/images/home1.jpg"
                alt="Kegiatan tim Teknik & Pengolahan — foto 1"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/20 dark:bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <figcaption className="absolute left-3 right-3 bottom-3 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              <div className="backdrop-blur-md bg-black/40 text-white px-3 py-2 rounded-xl flex items-center justify-between shadow-lg">
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">Dokumentasi tim — Foto 1</div>
                  <div className="text-[11px] opacity-80 truncate">Kebersamaan & kolaborasi</div>
                </div>
                <ImageIcon className="w-4 h-4 opacity-80 shrink-0" />
              </div>
            </figcaption>
          </div>
        </motion.figure>

        {/* Card Foto 2 */}
        <motion.figure
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900"
        >
          <div className="relative aspect-video w-full">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            >
              <Image
                src="/images/home2.jpg"
                alt="Kegiatan tim Teknik & Pengolahan — foto 2"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/20 dark:bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <figcaption className="absolute left-3 right-3 bottom-3 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              <div className="backdrop-blur-md bg-black/40 text-white px-3 py-2 rounded-xl flex items-center justify-between shadow-lg">
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">Dokumentasi tim — Foto 2</div>
                  <div className="text-[11px] opacity-80 truncate">Sinergi untuk performa terbaik</div>
                </div>
                <ImageIcon className="w-4 h-4 opacity-80 shrink-0" />
              </div>
            </figcaption>
          </div>
        </motion.figure>
      </motion.section>
    </>
  );
}

export default function Page() {
  const [activeKey, setActiveKey] = useState<PathKey>('home');
  const [search, setSearch] = useState('');

  const content = CONTENT_MAP[activeKey] ?? { title: 'Tidak ditemukan', items: [] };

  // Apakah bucket ini bertipe "group" (punya children)?
  const hasGroupedItems = useMemo(
    () => Array.isArray(content.items) && content.items.some((it) => isGroupItem(it)),
    [content.items]
  );

  // Untuk bucket flat (tanpa children), siapkan filter sederhana
  const filteredFlatItems: LinkItem[] = useMemo(() => {
    if (hasGroupedItems) return [];
    const list = (content.items as LinkItem[]) || [];
    const q = search.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.desc?.toLowerCase().includes(q) ||
        i.tag?.toLowerCase().includes(q)
    );
  }, [content.items, hasGroupedItems, search]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 text-slate-800 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
      {/* Header */}
      <AppHeader />

      {/* BODY */}
      <div className="mx-auto max-w-[1400px] px-2 sm:px-4 py-4 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
        {/* SIDEBAR */}
        <Sidebar
          activeKey={activeKey}
          onSelect={(k) => {
            setActiveKey(k);
            setSearch('');
          }}
        />

        {/* MAIN */}
        <main className="space-y-4">
          {activeKey === 'home' ? (
            <HomeSection />
          ) : (
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h1 className="text-xl font-bold">{content.title}</h1>
                  {'subtitle' in content && (content as { subtitle?: string }).subtitle && (
                    <p className="text-sm text-slate-500 mt-1">
                      {(content as { subtitle?: string }).subtitle}
                    </p>
                  )}
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

              {/* BODY */}
              <div className="mt-5">
                {hasGroupedItems ? (
                  // Grid grouped (dropdown default terbuka, diatur di ContentGrid/ContentGroup)
                  <ContentGrid bucket={content as unknown as { title: string; items: GroupItem[] }} search={search} />
                ) : (
                  // Grid flat item (tanpa children)
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredFlatItems.map((item) => (
                      <article
                        key={item.id}
                        className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-4 hover:shadow-md transition"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <FileText className="w-5 h-5 text-emerald-600" />
                              <h3 className="font-semibold leading-tight truncate">{item.title}</h3>
                            </div>
                            {item.desc && <p className="text-sm text-slate-500 mt-1 truncate">{item.desc}</p>}
                            {item.tag && (
                              <span className="mt-2 inline-flex px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
                            title="Buka"
                          >
                            Buka
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </article>
                    ))}
                    {filteredFlatItems.length === 0 && (
                      <div className="col-span-full text-center text-slate-500 py-10">Tidak ada dokumen yang cocok.</div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
