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

// tambahkan 'galeri' & tekpol-apps (kalau belum)
export type PathKey =
  | 'home'
  | 'pengolahan/tukangolah'
  | 'investasi/sub-instalasi-pks'
  | 'teknik/sub'
  | 'tekpol-apps'
  | 'galeri';

/* ===== Tambahan untuk Home & Data ===== */
export type HomeView = 'root' | 'pks-list' | 'pks-detail' | 'ppis' | 'ppkr';

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

export type NewsItem = {
  id: string;
  title: string;
  tag: string;
  date: string; // ISO atau human-readable
  excerpt: string;
  body: string;
  image?: string;
};