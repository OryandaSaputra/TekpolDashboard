// lib/constants.ts
import { ContentBucket, LinkItem } from './types';

/* -----------------------------
   PENGOLAHAN → PRODUKSI (contoh)
--------------------------------*/
export const PRODUKSI_PKS_LINKS: LinkItem[] = [
  {
    id: 'pks-lhp',
    title: 'LHP',
    desc: 'Laporan Harian Pabrik',
    href: 'https://drive.google.com/drive/u/0/folders/1OtDkLb8SmsNROyjSIV2YQfoPMr_GRtYv',
    tag: 'PKS',
  },
  {
    id: 'pks-jam-olah',
    title: 'JAM OLAH',
    desc: 'Jam olah & downtime',
    href: 'https://drive.google.com/drive/u/0/folders/1NOnfHcp_b5SXAOYK1Wqmgna-7kgfwlth',
    tag: 'PKS',
  },
];

export const PRODUKSI_PKR_LINKS: LinkItem[] = [
  // placeholder, silakan ganti kalau sudah ada
  { id: 'pkr-1', title: 'Rekap PKR Mingguan', href: 'https://drive.google.com/drive/folders/<ID-PKR-1>', tag: 'PKR' },
  { id: 'pkr-2', title: 'Rekap PKR Bulanan', href: 'https://drive.google.com/drive/folders/<ID-PKR-2>', tag: 'PKR' },
];

/* -----------------------------
   PENGOLAHAN → LAINNYA
--------------------------------*/
export const BIAYA_OLAH_LM_LINKS: LinkItem[] = [
  { id: 'lm-2021', title: 'LM 2021', href: 'https://drive.google.com/drive/folders/1ECdRiPB1wVCIGVN1ikPSPPUBhBuOpUXC', tag: 'LM' },
  { id: 'lm-2022', title: 'LM 2022', href: 'https://drive.google.com/drive/folders/1zfdTaMZoW4nUTk-d-AYVkBdt3W9oGFDe', tag: 'LM' },
  { id: 'lm-2023', title: 'LM 2023', href: 'https://drive.google.com/drive/folders/1rRiom_GXiptuT91L0U0CXzx8bYkKSSQL', tag: 'LM' },
  { id: 'lm-2024', title: 'LM 2024', href: 'https://drive.google.com/drive/folders/1ZUgLs1lihzqbTBq3VBB0dkVTw3XvcrgJ', tag: 'LM' },
  { id: 'lm-2025', title: 'LM 2025', href: 'https://drive.google.com/drive/folders/1tQZrx94aOE5247LfiqSFi0j5SYke7jcg', tag: 'LM' },
];

export const LTS_EON_LINKS: LinkItem[] = [
  { id: 'lts-technical-service', title: 'Technical Service', href: 'https://drive.google.com/drive/folders/1czTfn35AleT0FztXc0bGvTVczkI6ijjy', tag: 'EON' },
];

export const RKAP_2026_LINKS: LinkItem[] = [
  { id: 'rkap26-protas', title: 'RKAP Produksi 2026 Protas 24,012', href: 'https://drive.google.com/drive/folders/1o0HjAKhBTLyEHOcpExXOMXl-ita_s1KJ', tag: 'RKAP 2026' },
  { id: 'rkap26-biaya', title: 'Biaya Olah PKS, PPIS, dan PPKR RKAP 2026', href: 'https://docs.google.com/spreadsheets/d/1LyMYDZmV2YAQKCcZ81yjhkLbO6r5_7F7e8eRbNdTRhc/edit?gid=1831754238#gid=1831754238', tag: 'RKAP 2026' },
  { id: 'rkap26-tarif', title: 'Tarif HK PKS, PPIS dan PPKR RKAP 2026', href: 'https://docs.google.com/spreadsheets/d/1lkSgo-mrIR1p-letP-KU-98172IkagEWRx-1gbCMWZs/edit?gid=235236483#gid=235236483', tag: 'RKAP 2026' },
];

export const RKAP_2025_LINKS: LinkItem[] = [
  { id: 'rkap25-prodbiaya', title: 'RKAP Produksi dan Biaya 2025', href: 'https://drive.google.com/drive/folders/1XBAfK_C5Tk3wxnuSzuQkNJREym2fTfKk', tag: 'RKAP 2025' },
];

export const IZIN_LA_LINKS: LinkItem[] = [
  { id: 'izin-la', title: 'IZIN LA', href: 'https://drive.google.com/drive/u/0/folders/1v6SHTgauUQqiPEaZDbwiI_vwsD5SuWMU', tag: 'Perizinan' },
];

export const SOP_IK_PALMCO_LINKS: LinkItem[] = [
  { id: 'sop', title: 'SOP', href: 'https://drive.google.com/drive/folders/1cagnUq4V3umYmlvdP-nWsC8bjMGaSrVA', tag: 'SOP' },
  { id: 'ika', title: 'IKA', href: 'https://drive.google.com/drive/folders/1_INtguCgHdcnOdKj7H62p1KJGkvRgI3n', tag: 'IK' },
];

export const DRAFT_MONTHLY_LINKS: LinkItem[] = [
  { id: 'draft-2025-07', title: 'Juli 2025', href: 'https://drive.google.com/drive/folders/1d2IDbfPTKKxNdMwNaXrRKB01aSLrWNF2', tag: 'Draft' },
  { id: 'draft-2025-08', title: 'Agustus 2025', href: 'https://drive.google.com/drive/folders/1NkxzlvkG8ws5U1y3njrAoNs1L49blkdZ', tag: 'Draft' },
  { id: 'draft-2025-09', title: 'September 2025', href: 'https://drive.google.com/drive/folders/15UwsyA0Quf-gCiEGpXVWExsPCip8_t2R', tag: 'Draft' },
  { id: 'draft-2025-10-18', title: '18 Oktober 2025', href: 'https://drive.google.com/drive/folders/1R-k_cp4O4KnBQUkaR3MHm5MOw3GEQX0q', tag: 'Draft' },
  { id: 'draft-2025-10-19', title: '19 Oktober 2025', href: 'https://drive.google.com/drive/folders/1R-k_cp4O4KnBQUkaR3MHm5MOw3GEQX0q', tag: 'Draft' },
  { id: 'draft-2025-10-25', title: '25 Oktober 2025', href: 'https://drive.google.com/drive/folders/1R-k_cp4O4KnBQUkaR3MHm5MOw3GEQX0q', tag: 'Draft' },
];

export const EVB_OKTOBER_LINKS: LinkItem[] = [
  { id: 'evb-2025-10-03', title: '3 Oktober 2025', href: 'https://drive.google.com/drive/folders/1ieUvAXIBxo79djmReL87H9A2Hgwfpqcb', tag: 'EVB' },
  { id: 'evb-2025-10-10', title: '10 Oktober 2025', href: 'https://drive.google.com/drive/folders/1dctEfxl8AcqmDpydaOAZZRpOfFjhQLXq', tag: 'EVB' },
  { id: 'evb-2025-10-17', title: '17 Oktober 2025', href: 'https://drive.google.com/drive/folders/1RS9uG876YlDeWqtB5odnN1Dg-85TFrzZ', tag: 'EVB' },
];

export const BUKU_KALIBRASI_LINKS: LinkItem[] = [
  { id: 'buku-kalibrasi', title: 'Buku Kalibrasi Storage', href: 'https://drive.google.com/drive/folders/1gVmDGXcyxNlyifQJrwx0BA8qWz528M1i', tag: 'Kalibrasi' },
];
export const DIGITALISASI_LINKS: LinkItem[] = [];
export const BA_STOKOPNAME_LINKS: LinkItem[] = [
  { id: 'ba-so-2022-2024', title: 'BA SO 2022-2024', href: 'https://drive.google.com/drive/folders/18jggzm7f8nZQSJGsAJUZFP0ZnOK-tX44', tag: 'BA SO' },
  { id: 'ba-so-2025-09', title: 'September 2025', href: 'https://drive.google.com/drive/folders/1QIql8BRd47aP1I6xXaHB5hfIj6pbWdDa', tag: 'BA SO' },
];
export const STOK_GUDANG_LINKS: LinkItem[] = [
  { id: 'stok-2025-08', title: 'Agustus 2025', href: 'https://drive.google.com/drive/folders/1to277l5ijk9JF6bRJt9uLryXz3Co2Y92', tag: 'Stok' },
  { id: 'stok-2025-09', title: 'September 2025', href: 'https://drive.google.com/drive/folders/12F4-XohxoY82IjC7x7yCwt2S-_UD1eFi', tag: 'Stok' },
];
export const KONTRAK_LINKS: LinkItem[] = [
  { id: 'kontrak-owncloud', title: 'Kontrak (User: 3 TEP, Pass: 3TEP)', href: 'https://app.ptpn5.co.id/owncloud/index.php/login', tag: 'OwnCloud' },
];
export const INSTALASI_LINKS: LinkItem[] = [
  { id: 'inst-sub-pks', title: 'SUB INSTALASI PKS (KSWT)', href: 'https://sites.google.com/view/instalasi-/home', tag: 'Site' },
  { id: 'inst-katalog', title: 'KATALOG', href: 'https://drive.google.com/drive/folders/1zfENohyiSmAdatdOhRknxal8V8DE1NIT', tag: 'Drive' },
  { id: 'inst-bastek-2024', title: 'BASTEK 2024', href: 'https://drive.google.com/drive/folders/1UySvdds1kopX3iR83UaZO7rEcLIEVbi8?hl=id', tag: 'Drive' },
  { id: 'inst-sppbj-2024', title: 'SPPBJ 2024', href: 'https://drive.google.com/drive/folders/1TkhgpUQZsc6snVYg6Y7JeqM65CK30TS6?hl=id', tag: 'Drive' },
  { id: 'inst-kontrak-2024', title: 'KONTRAK 2024', href: 'https://drive.google.com/drive/folders/1GMr2BFV1YSxhrJMxdrQmYL_lC3hiw7Np', tag: 'Drive' },
  { id: 'inst-bastek-2025', title: 'BASTEK 2025', href: 'https://drive.google.com/drive/folders/17tkxvy_-WLRHuUe6GX2fgAB42skoAdhc', tag: 'Drive' },
  { id: 'inst-sppbj-2025', title: 'SPPBJ 2025', href: 'https://drive.google.com/drive/folders/1StxJpEaRp3SiVIc5TiFpFiBro4DKxnio', tag: 'Drive' },
  { id: 'inst-kontrak-2025', title: 'KONTRAK 2025', href: 'https://app.ptpn5.co.id/owncloud/index.php/s/dCZuHRm1cZZRXN1', tag: 'OwnCloud' },
  { id: 'inst-data-holding', title: 'DATA HOLDING', href: 'https://drive.google.com/drive/folders/1RgQN0uY3GRW-utzunRti0mGKOej0VMec', tag: 'Drive' },
  { id: 'inst-sop-ik', title: 'SOP & IK', href: 'https://drive.google.com/drive/folders/1AbuXwtpZKb6R7Nuxw6afrK6PqK-Rm2Ul', tag: 'Drive' },
];

export const APLIKASI_LINKS: LinkItem[] = [
  { id: 'app-mypalmco', title: 'MYPALMCO', href: 'https://palmco.my.id/', tag: 'Web' },
  { id: 'app-etekpol', title: 'E-Tekpol', href: 'http://118.97.163.52:8182/etekpol/', tag: 'Web' },
  { id: 'app-elemen', title: 'Elemen', href: 'https://elemen.ptpn.id/auth/welcome', tag: 'Web' },
  { id: 'app-pica', title: 'PICA', href: 'https://picatekpol.ptpn4.co.id/login', tag: 'Web' },
  { id: 'app-mims', title: 'MIMS - Angka Kerja', href: 'https://ptpn4.handal.in/account/login', tag: 'Web' },
  { id: 'app-intank', title: 'PALMCO - Intank Dashboard', href: 'https://palmco.intank.id/login', tag: 'Web' },
];

/* --------------------------------------------
   INVESTASI → Sub Instalasi PKS (35 tombol)
   - #1 & #2 adalah GRUP (expandable)
---------------------------------------------*/
const INV_AGENDA_PENOMORAN_SURAT: LinkItem = {
  id: 'inv-agenda-penomoran',
  title: 'Agenda Penomoran Surat',
  children: [
    { id: 'agenda-2021', title: 'Tahun 2021', href: 'https://docs.google.com/spreadsheets/d/1XfsWAk3NgGXR1rxR-cvAAs0uA0z2ywF6/edit?gid=1867115641#gid=1867115641' },
    { id: 'agenda-2022', title: 'Tahun 2022', href: 'https://docs.google.com/spreadsheets/d/17qayiodRcTKDPkcNkVMSO1_4HsrIU_eL/edit?gid=792174372#gid=792174372' },
    { id: 'agenda-2023', title: 'Tahun 2023', href: 'https://docs.google.com/spreadsheets/d/1M9zg0K6hzFGB09prirOCVlVct9H0PkUsGCi_CemHKhQ/edit' },
    { id: 'agenda-2024', title: 'Tahun 2024', href: 'https://docs.google.com/spreadsheets/d/19wzv3Bw2SZ8SHQS3VQtbBCXe79os9Uldngu3CuC_Tfc/edit#gid=1921630124' },
    { id: 'agenda-2025', title: 'Tahun 2025', href: 'https://docs.google.com/spreadsheets/d/1Ioqy5ackkeUUs0isdD2LQJygWW2tpvMa/edit?gid=197906093#gid=197906093' },
    { id: 'agenda-2026', title: 'Tahun 2026', href: 'https://www.google.com/url?q=http%3A%2F%2Fdasda&sa=D&sntz=1&usg=AOvVaw3QkubFwrQy0lk6eC39qIIo' },
  ],
};

const INV_KONDISI_PERALATAN_BULANAN_PKS: LinkItem = {
  id: 'inv-kondisi-bulanan-pks',
  title: 'Kondisi Peralatan Bulanan PKS',
  children: [
    { id: 'kpbpks-2020', title: 'Tahun 2020', href: 'https://drive.google.com/drive/folders/1tF5IAdch5XjkokWcsEUp9WLDxp684Wwz' },
    { id: 'kpbpks-2021', title: 'Tahun 2021', href: 'https://drive.google.com/drive/folders/1ZzhqseXYunHZ3uPXPC8-oh5nYski223f' },
    { id: 'kpbpks-2022', title: 'Tahun 2022', href: 'https://drive.google.com/drive/folders/1OiWI5bVW5EVbCBPSXBhYH3VIz9o1BczR' },
    { id: 'kpbpks-2023', title: 'Tahun 2023', href: 'https://drive.google.com/drive/folders/10oLLq18VYg0rpREMHbNgmgfMF3NdgE0H' },
  ],
};

const INV_SUB_INSTALASI_PKS_SINGLE: LinkItem[] = [
  { id: 'kond-holding', title: 'Kondisi Peralatan Holding', href: 'https://drive.google.com/drive/folders/1XNEQKgC4k0kf0Lc24QusZb30ruybFwGv' },
  { id: 'sop-ik-all', title: 'SOP IK Seluruh Bagian', href: 'https://drive.google.com/drive/folders/1xtX0BSlWm_S9mhR3xlYl5KTM_q65IM3U' },
  { id: 'workshop-sgh', title: 'Workshop Central SGH', href: 'https://drive.google.com/drive/folders/1EDzNxmfOYi1nmnLEhhTGg_Bq9erlgbj4?pli=1' },
  { id: 'sop-ik-palmco', title: 'SOP IK PALM CO', href: 'https://ims.ptpn4.co.id/' },
  { id: 'ekspl-2025-drive', title: 'EKSPLOTASI MONITORING 2025 DRIVE', href: 'https://docs.google.com/spreadsheets/d/1V8lqDZ6RhWUbusYt8W8RYarv_WG_lhhiJuNnW2yrHfw/edit?gid=1549802863#gid=1549802863' },
  { id: 'monitoring-2025', title: 'Monitoring 2025', href: 'https://docs.google.com/spreadsheets/d/1JlucMCru2YkgBlXfldNA8YITUWZEhlMInJgxBqAFmUY/edit?gid=803062927#gid=803062927' },
  { id: 'mon-inv-ekspl-2020', title: 'Monitoring investasi & Eksploitasi 2020', href: 'https://docs.google.com/spreadsheets/d/1SDrKWmZb4K8T-c3dLvSokdYpqALSgQlojh43XaHflek/edit?gid=1376628399#gid=1376628399' },
  { id: 'inv-sop-ik', title: 'SOP & IK', href: 'https://drive.google.com/drive/folders/1AbuXwtpZKb6R7Nuxw6afrK6PqK-Rm2Ul' },
  { id: 'mon-inv-ekspl-2021', title: 'Monitoring investasi & eksploitasi 2021', href: 'https://docs.google.com/spreadsheets/d/1Q4wOuF67eMsthwCn9iNNNArNgerJ3zAiL0mzx0iCwYA/edit?gid=2143760807#gid=2143760807' },
  { id: 'e-office-ptpn-v', title: 'E-office PTPN V', href: 'http://118.97.163.52:8300/login' },
  { id: 'mon-inv-ekspl-2022', title: 'Monitoring investasi & eksploitasi 2022', href: 'https://docs.google.com/spreadsheets/d/1LBD6Csn0jVF7kmLzqUAhVhjyVzGPFjyZCaD2RrbKQ_U/edit#gid=81639293' },
  { id: 'e-disposisi', title: 'E - Disposisi', href: 'http://118.97.163.52:88/disposisi/index.php/auth/login' },
  { id: 'mon-inv-2023', title: 'Monitoring investasi tahun 2023', href: 'https://docs.google.com/spreadsheets/d/19KiGI8W5XZCWyue_3XFXSN2rmAxBeqbm1k8czcjPOSk/edit?gid=1026780400#gid=1026780400' },
  { id: 'au31', title: 'AU 31 ONLINE', href: 'http://app1.ptpn5.co.id:8196/au31/login' },
  { id: 'mon-ekspl-2023', title: 'monitoring eksploitasi tahun 2023', href: 'https://docs.google.com/spreadsheets/d/1GL5f0e2-8k9msFv3t9R5WVgYK77uVlg5/edit#gid=1243882236' },
  { id: 'kontrak-pks', title: 'Kontrak PKS', href: 'https://drive.google.com/drive/folders/19g7B4zgy9wrBHmRc7GvrTyAhUeuh_Al2' },
  { id: 'rekap-inv-21-23', title: 'Rekap investasi tahun 2021 - 2023', href: 'https://docs.google.com/spreadsheets/d/1iP140f27zkEx3mCncXlfXN_VRS4MY4GO/edit#gid=665753425' },
  { id: 'ips', title: 'IPS', href: 'https://ips.holding-perkebunan.com/login' },
  { id: 'kontrak-pko-pkr-ebt-2023', title: 'Kontrak PKO, PKR, EBT 2023', href: 'https://drive.google.com/drive/folders/1QZ8OXwylZmX88lmt6NJ6cKjKacv4-u21' },
  { id: 'data-holding', title: 'Data holding', href: 'https://drive.google.com/drive/folders/1RgQN0uY3GRW-utzunRti0mGKOej0VMec' },
  { id: 'mon-inv-2024', title: 'monitoring investasi tahun 2024', href: 'https://docs.google.com/spreadsheets/d/150gJvUK9kZBHW1lhaEOOkD3gGyJjrnWjj-MUjvkQLII/edit#gid=1176535650' },
  { id: 'inv-katalog', title: 'KATALOG', href: 'https://drive.google.com/drive/folders/1zfENohyiSmAdatdOhRknxal8V8DE1NIT' },
  { id: 'bestek-2024', title: 'bestek 2024', href: 'https://drive.google.com/drive/folders/1UySvdds1kopX3iR83UaZO7rEcLIEVbi8?hl=id' },
  { id: 'mon-ekspl-2024', title: 'monitoring eksploitasi tahun 2024', href: 'https://docs.google.com/spreadsheets/d/1hwV3DGOlO2H9VdIKRjppU-elu9V2o22HEICkyn6PTUE/edit#gid=1635724175' },
  { id: 'sppbj-2024', title: 'SPPBJ 2024', href: 'https://drive.google.com/drive/folders/1TkhgpUQZsc6snVYg6Y7JeqM65CK30TS6?hl=id' },
  { id: 'progress-inv', title: 'progres investasi palm co', href: 'https://docs.google.com/spreadsheets/d/1-LnjyAgeJ4jBvpucLp_iAnrGtn7WmCLrYnmWhzFub2A/edit#gid=0' },
  { id: 'kontrak-2024', title: 'kontrak 2024', href: 'https://drive.google.com/drive/folders/1GMr2BFV1YSxhrJMxdrQmYL_lC3hiw7Np' },
  { id: 'material-new', title: 'material - new', href: 'https://docs.google.com/spreadsheets/d/14iOhVb3X3H-BSLPKXApb9s60nqByMIcr/edit?gid=533844244#gid=533844244' },
  { id: 'bestek-2025', title: 'bestek 2025', href: 'https://drive.google.com/drive/folders/17tkxvy_-WLRHuUe6GX2fgAB42skoAdhc' },
  { id: 'ecat-kobelco', title: 'e - catalog kawat las Kobelco', href: 'https://docs.google.com/spreadsheets/d/1ocgsD2KUt6C5X2O1NqQwnwp-NaZmQmpD/edit?gid=1936248269#gid=1936248269' },
  { id: 'sppbj-2025', title: 'SPPBJ 2025', href: 'https://drive.google.com/drive/folders/1StxJpEaRp3SiVIc5TiFpFiBro4DKxnio' },
  { id: 'program-excavator-mini', title: 'Program kerja Excavator Mini Regional III', href: 'https://docs.google.com/spreadsheets/d/164fTQii_6hoxC4B-aE3usigY8cDMNRo-/edit?gid=680435153#gid=680435153' },
  { id: 'kontrak-2025', title: 'Kontrak 2025', href: 'https://app.ptpn5.co.id/owncloud/index.php/s/dCZuHRm1cZZRXN1' },
];

export const INVEST_SUB_INSTALASI_PKS_ITEMS: LinkItem[] = [
  INV_AGENDA_PENOMORAN_SURAT,        // #1 (expandable)
  INV_KONDISI_PERALATAN_BULANAN_PKS, // #2 (expandable)
  ...INV_SUB_INSTALASI_PKS_SINGLE,   // #3 - #35
];

/* -----------------------------
   CONTENT MAP
--------------------------------*/
export const CONTENT_MAP: Record<string, ContentBucket> = {
  home: {
    title: 'Selamat Datang di Dashboard Teknik & Pengolahan',
    subtitle: 'Gunakan menu di sisi kiri untuk membuka koleksi dokumen kerja.',
    items: [],
  },

  // Pengolahan → Tukang Olah → Produksi
  'pengolahan/tukangolah/produksi/pks': {
    title: 'Pengolahan • Tukang Olah • Produksi • PKS',
    subtitle: 'Koleksi dokumen produksi PKS',
    items: PRODUKSI_PKS_LINKS,
  },
  'pengolahan/tukangolah/produksi/pkr': {
    title: 'Pengolahan • Tukang Olah • Produksi • PKR',
    subtitle: 'Koleksi dokumen produksi PKR',
    items: PRODUKSI_PKR_LINKS,
  },

  // Pengolahan → Tukang Olah (lainnya)
  'pengolahan/tukangolah/biaya-olah-lm': { title: 'Pengolahan • Tukang Olah • Biaya Olah LM', items: BIAYA_OLAH_LM_LINKS },
  'pengolahan/tukangolah/laporan-technical-service-eon': { title: 'Pengolahan • Tukang Olah • Laporan Technical Service EON', items: LTS_EON_LINKS },
  'pengolahan/tukangolah/rkap-2026': { title: 'Pengolahan • Tukang Olah • RKAP 2026', items: RKAP_2026_LINKS },
  'pengolahan/tukangolah/rkap-2025': { title: 'Pengolahan • Tukang Olah • RKAP 2025', items: RKAP_2025_LINKS },
  'pengolahan/tukangolah/izin-la': { title: 'Pengolahan • Tukang Olah • IZIN LA', items: IZIN_LA_LINKS },
  'pengolahan/tukangolah/sop-ik-palmco': { title: 'Pengolahan • Tukang Olah • SOP/IK Palmco', items: SOP_IK_PALMCO_LINKS },
  'pengolahan/tukangolah/draft-monthly': { title: 'Pengolahan • Tukang Olah • Draft Monthly', items: DRAFT_MONTHLY_LINKS },
  'pengolahan/tukangolah/evaluasi-berjenjang/oktober': { title: 'Pengolahan • Tukang Olah • Evaluasi Berjenjang • Oktober', items: EVB_OKTOBER_LINKS },
  'pengolahan/tukangolah/buku-kalibrasi-storage': { title: 'Pengolahan • Tukang Olah • Buku Kalibrasi Storage', items: BUKU_KALIBRASI_LINKS },
  'pengolahan/tukangolah/digitalisasi': { title: 'Pengolahan • Tukang Olah • Digitalisasi', items: DIGITALISASI_LINKS },
  'pengolahan/tukangolah/ba-stokopname': { title: 'Pengolahan • Tukang Olah • BA Stokopname', items: BA_STOKOPNAME_LINKS },
  'pengolahan/tukangolah/stok-gudang-barang': { title: 'Pengolahan • Tukang Olah • Stok Gudang Barang', items: STOK_GUDANG_LINKS },
  'pengolahan/tukangolah/kontrak': { title: 'Pengolahan • Tukang Olah • Kontrak', items: KONTRAK_LINKS },
  'pengolahan/tukangolah/instalasi': { title: 'Pengolahan • Tukang Olah • Instalasi', items: INSTALASI_LINKS },
  'pengolahan/tukangolah/aplikasi': { title: 'Pengolahan • Tukang Olah • Aplikasi', items: APLIKASI_LINKS },

  // Placeholder
  'pengolahan/b': { title: 'Pengolahan • B', items: [] },
  'pengolahan/c': { title: 'Pengolahan • C', items: [] },

  // INVESTASI → Sub Instalasi PKS (submenu)
  'investasi/sub-instalasi-pks': {
    title: 'Investasi & Eksploitasi Pabrik • Sub Instalasi PKS',
    subtitle: 'Klik grup untuk menampilkan tahun. Klik tombol untuk membuka tautan di tab baru.',
    items: INVEST_SUB_INSTALASI_PKS_ITEMS,
  },
};
