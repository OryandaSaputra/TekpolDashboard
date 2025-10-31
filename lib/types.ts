// lib/types.ts
export type PathKey = string;

export type LinkItem = {
  id: string;
  title: string;
  href?: string;     // ada jika item daun (leaf)
  desc?: string;
  tag?: string;
  children?: LinkItem[]; // ada jika item grup (expandable)
};

export type ContentBucket = {
  title: string;
  subtitle?: string;
  items: LinkItem[];
};
