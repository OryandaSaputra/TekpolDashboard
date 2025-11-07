// lib/types.ts

/* ========== Sidebar & Konten ==========- */
export type LinkItem = {
  id: string;
  title: string;
  href?: string;
  desc?: string;
  tag?: string;
  children?: LinkItem[];
};

export type ContentBucket = {
  title: string;
  subtitle?: string;
  items: LinkItem[];
};

/** Halaman/route internal app (untuk Sidebar) */
export type PathKey =
  | 'home'
  | 'pengolahan/tukangolah'
  | 'investasi/sub-instalasi-pks'
  | 'teknik/sub'
  | 'tekpol-apps'
  | 'galeri'
  | 'info-login'   // ⬅️ baru
  | 'approval';    // ⬅️ baru

/* ==========- Home Router Views ==========- */
export type HomeView =
  | 'root'
  | 'pks-list'
  | 'pks-detail'
  | 'ppis'
  | 'ppkr'
  | 'info-login'    // ⬅️ baru
  | 'approval';     // ⬅️ baru

/* ==========- Domain types ringkas (tanpa @prisma/client) ==========- */
/** Pastikan konsisten dengan enum/field di Prisma schema */
export type Role = 'PKWT' | 'KARYAWAN' | 'KASUBAG' | 'KABAG' | 'GUEST';
export type Decision = 'PENDING' | 'APPROVED' | 'REJECTED';
export type Category = 'HO' | 'REGIONAL';

/* ==========- PKS data (statik/dummy) ==========- */
export type Pks = {
  id: string;
  nama: string;
  jenis: 'PKS';
  alamat: string;
  kapasitasTbsPerJam: number;
};

export type PksDetail = {
  id: string;
  nama: string;
  infoUmum: {
    jenis: string;
    alamat: string;
    kapasitasTbsPerJam: number;
    tahunOperasional: number;
    jumlahLine: number;
  };
  catatan: string[]; // bullet points
};

/* ==========- News ==========- */
export type NewsItem = {
  id: string;
  title: string;
  tag: string;
  date: string;
  excerpt: string;
  body: string;
  image?: string;
  youtubeId?: string;
  videoUrl?: string;
  labelAbove?: string; // judul kecil di atas kartu (opsional)
};
