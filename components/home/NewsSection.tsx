'use client';

import React, { useCallback, useState } from 'react';
import { X, Newspaper } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NEWS_LIST } from '@/lib/data/news';

// Tipe item dari NEWS_LIST
type NewsEntity = (typeof NEWS_LIST)[number];

export default function NewsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = NEWS_LIST.find((n) => n.id === openId) || null;

  const handleOpen = useCallback((id: string) => setOpenId(id), []);
  const handleClose = useCallback(() => setOpenId(null), []);

  return (
    <>
      <section className="mt-6">
        <div className="inline-flex items-center gap-2 mb-3 bg-emerald-50 px-3 py-1 rounded-lg">
          <Newspaper className="w-5 h-5 text-emerald-600" />
          <h3 className="font-semibold text-emerald-700">Berita Terkini</h3>
        </div>


        {/* Grid 4 kolom (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {NEWS_LIST.map((n) => (
            <NewsCard key={n.id} item={n} onOpen={() => handleOpen(n.id)} />
          ))}
        </div>
      </section>

      {/* Modal detail */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl"
          >
            {/* Header media */}
            {selected.image && (
              <div className="relative aspect-16/7 w-full">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/90 text-slate-800 dark:bg-slate-900/80 dark:text-slate-100 border border-white/60 dark:border-slate-700 backdrop-blur">
                    {selected.tag}
                  </span>
                  <span className="text-[11px] text-white/90 drop-shadow">{selected.date}</span>
                </div>
              </div>
            )}

            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Body */}
            <div className="p-5">
              <h4 className="text-lg font-semibold">{selected.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selected.body}
              </p>
              <div className="mt-4">
                <button
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

/* ===========================
   Kartu Berita dengan Hover Realistis
   - Tilt 3D mengikuti kursor (rotateX/rotateY)
   - Glare cahaya mengikuti kursor
   - Zoom gambar halus + shadow naik
   =========================== */
function NewsCard({
  item,
  onOpen,
}: {
  item: NewsEntity;
  onOpen: () => void;
}) {
  const [rx, setRx] = useState(0); // rotateX (deg)
  const [ry, setRy] = useState(0); // rotateY (deg)
  const [gx, setGx] = useState(50); // glare pos X (%)
  const [gy, setGy] = useState(50); // glare pos Y (%)
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // Tilt max 6 derajat, lebih natural
    const maxTilt = 6;
    const newRy = (px - 0.5) * (maxTilt * 2); // -6..+6
    const newRx = (0.5 - py) * (maxTilt * 2); // -6..+6

    setRy(newRy);
    setRx(newRx);
    setGx(px * 100);
    setGy(py * 100);
  };

  const handleLeave = () => {
    setHovered(false);
    setRx(0);
    setRy(0);
    setGx(50);
    setGy(50);
  };

  return (
    <motion.article
      role="button"
      tabIndex={0}
      aria-label={`Buka berita: ${item.title}`}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rx,
        rotateY: ry,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 hover:shadow-2xl hover:border-emerald-200/70 focus:outline-none focus:ring-2 ring-emerald-300 transition"
    >
      {/* Media */}
      <div className="relative aspect-16/10 w-full">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.06]"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800" />
        )}

        {/* Overlay gradient bawah */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
          <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
          <div className="relative flex items-center gap-2">
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/90 text-slate-800 dark:bg-slate-900/80 dark:text-slate-100 border border-white/60 dark:border-slate-700 backdrop-blur">
              {item.tag}
            </span>
            <span className="text-[11px] text-white/90 drop-shadow">{item.date}</span>
          </div>
        </div>

        {/* Glare mengikuti kursor (radial highlight) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at ${gx}% ${gy}%, rgba(255,255,255,0.10), transparent 40%)`,
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Body */}
      <div
        className="p-4"
        style={{
          transform: 'translateZ(10px)', // sedikit pop-out saat tilt
        }}
      >
        <h4 className="font-semibold leading-snug line-clamp-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
          {item.title}
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
          {item.excerpt}
        </p>

        {/* Affordance halus */}
        <div className="mt-3 text-[13px] text-emerald-700/90 dark:text-emerald-300/90 underline underline-offset-4 decoration-emerald-300/50 group-hover:decoration-emerald-500/80">
          Baca selengkapnya
        </div>
      </div>

      {/* Ring luar lembut saat hover untuk kesan depth */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${hovered ? 'ring-1 ring-emerald-300/40 opacity-100' : 'opacity-0'
          }`}
      />
    </motion.article>
  );
}
