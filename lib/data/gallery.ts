export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  date: string;
  image?: string; // optional, kalau tidak ada akan ada fallback gradient
};

export const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 12 }).map((_, i) => {
  const useA = i % 2 === 0;
  return {
    id: `gal-${i + 1}`,
    title: `Dokumentasi ${i + 1}`,
    caption:
      'Momen kebersamaan tim Teknik & Pengolahan. Deskripsi singkat kegiatan (dummy) untuk kebutuhan tampilan.',
    date: '2025-10-20',
    image: useA ? '/images/home1.jpg' : '/images/home2.jpg',
  };
});
