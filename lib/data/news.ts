// lib/data/news.ts
import type { NewsItem } from '@/lib/types';

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'n1',
    title: 'Perawatan Berkala Meningkatkan Reliability',
    tag: 'Teknik',
    date: '2025-10-12',
    excerpt: 'Program preventive maintenance terbukti menurunkan downtime pada lini perebusan…',
    body:
      'Program preventive maintenance yang dilakukan secara konsisten pada stasiun perebusan, klarifikasi, dan kernel berhasil menurunkan downtime sebesar 18% MoM. Ke depan, tim akan memperluas cakupan ke utility dan power house untuk memperkuat reliability pabrik secara menyeluruh.',
    image: '/images/home1.jpg',
  },
  {
    id: 'n2',
    title: 'Optimasi Takaran Kapasitas TBS/Jam',
    tag: 'Produksi',
    date: '2025-10-20',
    excerpt: 'Kalibrasi ulang takaran kapasitas TBS/jam memberikan margin efisiensi 3–5%…',
    body:
      'Setelah dilakukan kalibrasi ulang dan penyesuaian SOP loading, margin efisiensi meningkat pada jam-jam sibuk. Inisiatif ini akan dipadukan dengan dashboard monitoring realtime untuk memastikan konsistensi antar shift.',
    image: '/images/home2.jpg',
  },
  {
    id: 'n3',
    title: 'Digitalisasi Checklist Harian',
    tag: 'Inovasi',
    date: '2025-10-28',
    excerpt: 'Checklist harian beralih ke formulir digital terintegrasi dengan Tekpol Apps…',
    body:
      'Form checklist digital memudahkan pelacakan temuan dan follow-up action. Setiap temuan otomatis masuk ke antrian perbaikan dan dapat dipantau statusnya oleh supervisor dan kepala pabrik.',
    image: '/images/home1.jpg',
  },
  {
    id: 'n4',
    title: 'Pelatihan Keselamatan Kerja',
    tag: 'EHS',
    date: '2025-11-01',
    excerpt: 'EHS menyelesaikan batch pelatihan untuk operator dan teknisi utility…',
    body:
      'Batch pelatihan terbaru menekankan lock-out/tag-out, confined space, serta penanganan bahan kimia. Evaluasi menunjukkan peningkatan kepatuhan APD dan pelaporan near-miss.',
    image: '/images/home2.jpg',
  },
];
