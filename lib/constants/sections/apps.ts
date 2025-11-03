// lib/constants/sections/apps.ts
import type { ContentBucket, LinkItem } from '@/lib/types';
import { PENGOLAHAN_TUKANG_OLAH } from './pengolahan';

// coba ambil dari group "Aplikasi" (id === 'aplikasi' atau title 'Aplikasi')
const appsGroup =
  PENGOLAHAN_TUKANG_OLAH.items.find(
    (i) => i.id === 'aplikasi' || i.title?.toLowerCase() === 'aplikasi'
  ) ?? null;

// fallback kalau tidak ketemu di pengolahan.ts
const FALLBACK_APPS: LinkItem[] = [
  { id: 'app-mypalmco', title: 'MYPALMCO', href: 'https://palmco.my.id/' },
  { id: 'app-e-tekpol', title: 'E-Tekpol', href: 'http://118.97.163.52:8182/etekpol/', tag: 'Login' },
  { id: 'app-elemen', title: 'Elemen', href: 'https://elemen.ptpn.id/auth/welcome', tag: 'Login' },
  { id: 'app-pica', title: 'PICA', href: 'https://picatekpol.ptpn4.co.id/login', tag: 'Login' },
  { id: 'app-iqx', title: 'IQX', href: 'https://app.iqx.net', tag: 'Login' }, // disingkat ke domain utama
  { id: 'app-mims', title: 'MIMS - Angka Kerja', href: 'https://ptpn4.handal.in/account/login', tag: 'Login' },
  { id: 'app-intank', title: 'PALMCO - Intank Dashboard', href: 'https://palmco.intank.id/login', tag: 'Login' },
];

export const TEKPOL_APPS_BUCKET: ContentBucket = {
  title: 'Tekpol Apps',
  items: appsGroup?.children && appsGroup.children.length > 0 ? appsGroup.children : FALLBACK_APPS,
};
