export type LinkItem = {
  id: string;
  title: string;
  href?: string;
  desc?: string;
  tag?: string;
  children?: LinkItem[]; // kalau ada -> dianggap group/folder
};

export type ContentBucket = {
  title: string;
  subtitle?: string;
  items: LinkItem[];
};

// Hanya path yang benar-benar ada di CONTENT_MAP
export type PathKey =
  | 'home'
  | 'pengolahan/tukangolah'
  | 'investasi/sub-instalasi-pks'
  | 'teknik/sub'
  | 'tekpol-apps'; // ⬅️ menu baru
