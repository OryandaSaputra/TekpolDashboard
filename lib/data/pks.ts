// lib/data/pks.ts
import type { Pks, PksDetail } from '@/lib/types';

export const PKS_LIST: Pks[] = [
  { id: 'pks-tanah-putih', nama: 'PKS Tanah Putih', jenis: 'PKS', alamat: 'Kec. Tanah Putih, Kab. Rokan Hilir, Riau', kapasitasTbsPerJam: 60 },
  { id: 'pks-tanjung-medan', nama: 'PKS Tanjung Medan', jenis: 'PKS', alamat: 'Kec. Tanjung Medan, Kab. Rokan Hilir, Riau', kapasitasTbsPerJam: 45 },
  { id: 'pks-sei-galuh', nama: 'PKS Sei Galuh', jenis: 'PKS', alamat: 'Kec. Tapung, Kab. Kampar, Riau', kapasitasTbsPerJam: 60 },
  { id: 'pks-sei-pagar', nama: 'PKS Sei Pagar', jenis: 'PKS', alamat: 'Kec. Kampar Kiri, Kab. Kampar, Riau', kapasitasTbsPerJam: 60 },
  { id: 'pks-sei-garo', nama: 'PKS Sei Garo', jenis: 'PKS', alamat: 'Kec. Tapung, Kab. Kampar, Riau', kapasitasTbsPerJam: 30 },
  { id: 'pks-sei-buatan', nama: 'PKS Sei Buatan', jenis: 'PKS', alamat: 'Kec. Lubuk Dalam, Kab. Siak, Riau', kapasitasTbsPerJam: 45 },
  { id: 'pks-lubuk-dalam', nama: 'PKS Lubuk Dalam', jenis: 'PKS', alamat: 'Kec. Lubuk Dalam, Kab. Siak, Riau', kapasitasTbsPerJam: 60 },
  { id: 'pks-tandun', nama: 'PKS Tandun', jenis: 'PKS', alamat: 'Kec. Tandun, Kab. Rokan Hulu, Riau', kapasitasTbsPerJam: 60 },
  { id: 'pks-terantam', nama: 'PKS Terantam', jenis: 'PKS', alamat: 'Kec. Pinggir, Kab. Bengkalis, Riau', kapasitasTbsPerJam: 60 },
  { id: 'pks-sei-tapung', nama: 'PKS Sei Tapung', jenis: 'PKS', alamat: 'Kec. Tapung Hilir, Kab. Kampar, Riau', kapasitasTbsPerJam: 45 },
  { id: 'pks-sei-rokan', nama: 'PKS Sei Rokan', jenis: 'PKS', alamat: 'Kec. Rokan IV Koto, Kab. Rokan Hulu, Riau', kapasitasTbsPerJam: 45 },
  { id: 'pks-sei-intan', nama: 'PKS Sei Intan', jenis: 'PKS', alamat: 'Kec. Kandis, Kab. Siak, Riau', kapasitasTbsPerJam: 60 },
];

// Generator detail dummy dari PKS_LIST
export function getPksDetail(id: string): PksDetail | null {
  const base = PKS_LIST.find((p) => p.id === id);
  if (!base) return null;

  return {
    id: base.id,
    nama: base.nama,
    infoUmum: {
      jenis: base.jenis,
      alamat: base.alamat,
      kapasitasTbsPerJam: base.kapasitasTbsPerJam,
      tahunOperasional: 2014,
      jumlahLine: base.kapasitasTbsPerJam >= 60 ? 2 : 1,
    },
    catatan: [
      'Rebusan 8 pot, target OER 22%',
      'Peremajaan boiler ke-2 dijadwalkan Q1 tahun depan',
      'Sistem monitoring getaran di turbin sudah aktif (IoT)',
    ],
  };
}
