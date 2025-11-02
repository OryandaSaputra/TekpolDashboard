import type { ContentBucket, LinkItem } from '@/lib/types';
import { GENERIC_LINKS } from './common';

// ===== Produksi → PKS
const PRODUKSI_PKS_ITEMS: LinkItem[] = [
  {
    id: 'pks-lhp',
    title: 'LHP',
    href: 'https://drive.google.com/drive/u/0/folders/1OtDkLb8SmsNROyjSIV2YQfoPMr_GRtYv',
    tag: 'Drive',
  },
  {
    id: 'pks-jam-olah',
    title: 'Jam Olah',
    href: 'https://drive.google.com/drive/u/0/folders/1NOnfHcp_b5SXAOYK1Wqmgna-7kgfwlth',
    tag: 'Drive',
  },
];

// ===== Produksi → PKR (belum ada isi khusus)
const PRODUKSI_PKR_ITEMS: LinkItem[] = [];

// ===== Biaya Olah LM
const BIAYA_OLAH_LM: LinkItem[] = [
  { id: 'lm-2021', title: 'LM 2021', href: 'https://drive.google.com/drive/folders/1ECdRiPB1wVCIGVN1ikPSPPUBhBuOpUXC' },
  { id: 'lm-2022', title: 'LM 2022', href: 'https://drive.google.com/drive/folders/1zfdTaMZoW4nUTk-d-AYVkBdt3W9oGFDe' },
  { id: 'lm-2023', title: 'LM 2023', href: 'https://drive.google.com/drive/folders/1rRiom_GXiptuT91L0U0CXzx8bYkKSSQL' },
  { id: 'lm-2024', title: 'LM 2024', href: 'https://drive.google.com/drive/folders/1ZUgLs1lihzqbTBq3VBB0dkVTw3XvcrgJ' },
  { id: 'lm-2025', title: 'LM 2025', href: 'https://drive.google.com/drive/folders/1tQZrx94aOE5247LfiqSFi0j5SYke7jcg' },
];

// ===== Laporan Technical Service EON
const TECH_SERVICE_EON: LinkItem[] = [
  {
    id: 'tech-service',
    title: 'Technical Service',
    href: 'https://drive.google.com/drive/folders/1czTfn35AleT0FztXc0bGvTVczkI6ijjy',
  },
];

// ===== RKAP 2026
const RKAP_2026: LinkItem[] = [
  {
    id: 'rkap26-prod',
    title: 'RKAP Produksi 2026 Protas 24,012',
    href: 'https://drive.google.com/drive/folders/1o0HjAKhBTLyEHOcpExXOMXl-ita_s1KJ',
  },
  {
    id: 'rkap26-biaya',
    title: 'Biaya Olah PKS, PPIS, dan PPKR RKAP 2026',
    href: 'https://docs.google.com/spreadsheets/d/1LyMYDZmV2YAQKCcZ81yjhkLbO6r5_7F7e8eRbNdTRhc/edit?gid=1831754238#gid=1831754238',
    tag: 'Sheet',
  },
  {
    id: 'rkap26-tarif-hk',
    title: 'Tarif HK PKS, PPIS dan PPKR RKAP 2026',
    href: 'https://docs.google.com/spreadsheets/d/1lkSgo-mrIR1p-letP-KU-98172IkagEWRx-1gbCMWZs/edit?gid=235236483#gid=235236483',
    tag: 'Sheet',
  },
];

// ===== RKAP 2025
const RKAP_2025: LinkItem[] = [
  {
    id: 'rkap25',
    title: 'RKAP Produksi dan Biaya 2025',
    href: 'https://drive.google.com/drive/folders/1XBAfK_C5Tk3wxnuSzuQkNJREym2fTfKk',
  },
];

// ===== IZIN LA
const IZIN_LA: LinkItem[] = [
  { id: 'izin-la', title: 'IZIN LA', href: 'https://drive.google.com/drive/u/0/folders/1v6SHTgauUQqiPEaZDbwiI_vwsD5SuWMU' },
];

// ===== SOP/IK Palmco
const SOP_IK_PALMCO: LinkItem[] = [
  { id: 'sop', title: 'SOP', href: 'https://drive.google.com/drive/folders/1cagnUq4V3umYmlvdP-nWsC8bjMGaSrVA' },
  { id: 'ika', title: 'IKA', href: 'https://drive.google.com/drive/folders/1_INtguCgHdcnOdKj7H62p1KJGkvRgI3n' },
];

// ===== Draft Monthly
const DRAFT_MONTHLY: LinkItem[] = [
  { id: 'dr-juli25', title: 'Juli 2025', href: 'https://drive.google.com/drive/folders/1d2IDbfPTKKxNdMwNaXrRKB01aSLrWNF2' },
  { id: 'dr-agt25', title: 'Agustus 2025', href: 'https://drive.google.com/drive/folders/1NkxzlvkG8ws5U1y3njrAoNs1L49blkdZ' },
  { id: 'dr-sep25', title: 'September 2025', href: 'https://drive.google.com/drive/folders/15UwsyA0Quf-gCiEGpXVWExsPCip8_t2R' },
  { id: 'dr-18okt25', title: '18 Oktober 2025', href: 'https://drive.google.com/drive/folders/1R-k_cp4O4KnBQUkaR3MHm5MOw3GEQX0q' },
  { id: 'dr-19okt25', title: '19 Oktober 2025', href: 'https://drive.google.com/drive/folders/1R-k_cp4O4KnBQUkaR3MHm5MOw3GEQX0q' },
  { id: 'dr-25okt25', title: '25 Oktober 2025', href: 'https://drive.google.com/drive/folders/1R-k_cp4O4KnBQUkaR3MHm5MOw3GEQX0q' },
];

// ===== Evaluasi Berjenjang → Oktober
const EVAL_OKT: LinkItem[] = [
  { id: 'ok-03', title: '3 Oktober 2025', href: 'https://drive.google.com/drive/folders/1ieUvAXIBxo79djmReL87H9A2Hgwfpqcb' },
  { id: 'ok-10', title: '10 Oktober 2025', href: 'https://drive.google.com/drive/folders/1dctEfxl8AcqmDpydaOAZZRpOfFjhQLXq' },
  { id: 'ok-17', title: '17 Oktober 2025', href: 'https://drive.google.com/drive/folders/1RS9uG876YlDeWqtB5odnN1Dg-85TFrzZ' },
];

// ===== Lain-lain
const BUKU_KALIBRASI: LinkItem[] = [
  { id: 'kalibrasi', title: 'Buku Kalibrasi Storage', href: 'https://drive.google.com/drive/folders/1gVmDGXcyxNlyifQJrwx0BA8qWz528M1i' },
];
const DIGITALISASI: LinkItem[] = []; // no items
const BA_STOKOPNAME: LinkItem[] = [
  { id: 'ba-so-2224', title: 'BA SO 2022-2024', href: 'https://drive.google.com/drive/folders/18jggzm7f8nZQSJGsAJUZFP0ZnOK-tX44' },
  { id: 'ba-so-sep25', title: 'September 2025', href: 'https://drive.google.com/drive/folders/1QIql8BRd47aP1I6xXaHB5hfIj6pbWdDa' },
];
const STOK_GUDANG: LinkItem[] = [
  { id: 'sgb-agt25', title: 'Agustus 2025', href: 'https://drive.google.com/drive/folders/1to277l5ijk9JF6bRJt9uLryXz3Co2Y92' },
  { id: 'sgb-sep25', title: 'September 2025', href: 'https://drive.google.com/drive/folders/12F4-XohxoY82IjC7x7yCwt2S-_UD1eFi' },
];
const KONTRAK: LinkItem[] = [
  { id: 'kontrak-owncloud', title: 'Kontrak (User: 3 TEP, Pass: 3TEP)', href: 'https://app.ptpn5.co.id/owncloud/index.php/login', tag: 'Login' },
];
const INSTALASI: LinkItem[] = [
  { id: 'inst-subpks', title: 'SUB INSTALASI PKS (KSWT)', href: 'https://sites.google.com/view/instalasi-/home' },
  { id: 'inst-katalog', title: 'KATALOG', href: 'https://drive.google.com/drive/folders/1zfENohyiSmAdatdOhRknxal8V8DE1NIT' },
  { id: 'inst-bastek-2024', title: 'BASTEK 2024', href: 'https://drive.google.com/drive/folders/1UySvdds1kopX3iR83UaZO7rEcLIEVbi8?hl=id' },
  { id: 'inst-sppbj-2024', title: 'SPPBJ 2024', href: 'https://drive.google.com/drive/folders/1TkhgpUQZsc6snVYg6Y7JeqM65CK30TS6?hl=id' },
  { id: 'inst-kontrak-2024', title: 'KONTRAK 2024', href: 'https://drive.google.com/drive/folders/1GMr2BFV1YSxhrJMxdrQmYL_lC3hiw7Np' },
  { id: 'inst-bastek-2025', title: 'BASTEK 2025', href: 'https://drive.google.com/drive/folders/17tkxvy_-WLRHuUe6GX2fgAB42skoAdhc' },
  { id: 'inst-sppbj-2025', title: 'SPPBJ 2025', href: 'https://drive.google.com/drive/folders/1StxJpEaRp3SiVIc5TiFpFiBro4DKxnio' },
  { id: 'inst-kontrak-2025', title: 'KONTRAK 2025', href: 'https://app.ptpn5.co.id/owncloud/index.php/s/dCZuHRm1cZZRXN1' },
  { id: 'inst-data-holding', title: 'DATA HOLDING', href: 'https://drive.google.com/drive/folders/1RgQN0uY3GRW-utzunRti0mGKOej0VMec' },
  { id: 'inst-sop-ik', title: 'SOP & IK', href: 'https://drive.google.com/drive/folders/1AbuXwtpZKb6R7Nuxw6afrK6PqK-Rm2Ul' },
];
const APLIKASI: LinkItem[] = [
  { id: 'app-mypalmco', title: 'MYPALMCO', href: 'https://palmco.my.id/' },
  { id: 'app-e-tekpol', title: 'E-Tekpol', href: 'http://118.97.163.52:8182/etekpol/' },
  { id: 'app-elemen', title: 'Elemen', href: 'https://elemen.ptpn.id/auth/welcome' },
  { id: 'app-pica', title: 'PICA', href: 'https://picatekpol.ptpn4.co.id/login' },
  { id: 'app-iqx', title: 'IQX', href: 'https://app.iqx.net' },
  { id: 'app-mims', title: 'MIMS - Angka Kerja', href: 'https://ptpn4.handal.in/account/login' },
  { id: 'app-intank', title: 'PALMCO - Intank Dashboard', href: 'https://palmco.intank.id/login' },
];

export const PENGOLAHAN_CONTENT: Record<string, ContentBucket> = {
  'pengolahan/tukangolah/produksi/pks': {
    title: 'Pengolahan • Tukang Olah • Produksi • PKS',
    subtitle: 'Koleksi dokumen & laporan terkait produksi (PKS)',
    items: PRODUKSI_PKS_ITEMS,
  },
  'pengolahan/tukangolah/produksi/pkr': {
    title: 'Pengolahan • Tukang Olah • Produksi • PKR',
    subtitle: 'Koleksi dokumen & laporan terkait produksi (PKR)',
    items: PRODUKSI_PKR_ITEMS,
  },

  'pengolahan/tukangolah/biaya-olah-lm': { title: 'Pengolahan • Tukang Olah • Biaya Olah LM', items: BIAYA_OLAH_LM },
  'pengolahan/tukangolah/laporan-technical-service-eon': {
    title: 'Pengolahan • Tukang Olah • Laporan Technical Service EON',
    items: TECH_SERVICE_EON,
  },
  'pengolahan/tukangolah/rkap-2026': { title: 'Pengolahan • Tukang Olah • RKAP 2026', items: RKAP_2026 },
  'pengolahan/tukangolah/rkap-2025': { title: 'Pengolahan • Tukang Olah • RKAP 2025', items: RKAP_2025 },
  'pengolahan/tukangolah/izin-la': { title: 'Pengolahan • Tukang Olah • IZIN LA', items: IZIN_LA },
  'pengolahan/tukangolah/sop-ik-palmco': { title: 'Pengolahan • Tukang Olah • SOP/IK Palmco', items: SOP_IK_PALMCO },
  'pengolahan/tukangolah/draft-monthly': { title: 'Pengolahan • Tukang Olah • Draft Monthly', items: DRAFT_MONTHLY },

  'pengolahan/tukangolah/evaluasi-berjenjang/oktober': {
    title: 'Pengolahan • Tukang Olah • Evaluasi Berjenjang • Oktober',
    items: EVAL_OKT,
  },

  'pengolahan/tukangolah/buku-kalibrasi-storage': { title: 'Pengolahan • Tukang Olah • Buku Kalibrasi Storage', items: BUKU_KALIBRASI },
  'pengolahan/tukangolah/digitalisasi': { title: 'Pengolahan • Tukang Olah • Digitalisasi', items: DIGITALISASI },
  'pengolahan/tukangolah/ba-stokopname': { title: 'Pengolahan • Tukang Olah • BA Stokopname', items: BA_STOKOPNAME },
  'pengolahan/tukangolah/stok-gudang-barang': { title: 'Pengolahan • Tukang Olah • Stok Gudang Barang', items: STOK_GUDANG },
  'pengolahan/tukangolah/kontrak': { title: 'Pengolahan • Tukang Olah • Kontrak', items: KONTRAK },
  'pengolahan/tukangolah/instalasi': { title: 'Pengolahan • Tukang Olah • Instalasi', items: INSTALASI },
  'pengolahan/tukangolah/aplikasi': { title: 'Pengolahan • Tukang Olah • Aplikasi', items: APLIKASI },

  // Kategori B/C jika nanti dibutuhkan
  'pengolahan/b': { title: 'Pengolahan • B', items: GENERIC_LINKS },
  'pengolahan/c': { title: 'Pengolahan • C', items: GENERIC_LINKS },
};
