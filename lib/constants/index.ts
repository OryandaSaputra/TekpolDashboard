import type { ContentBucket } from '@/lib/types';

import { HOME_BUCKET } from './sections/common';
import { PENGOLAHAN_CONTENT } from './sections/pengolahan';
import { INVESTASI_CONTENT } from './sections/investasi';
import { TEKNIK_CONTENT } from './sections/teknik';

// Gabungkan semua bucket jadi satu CONTENT_MAP
export const CONTENT_MAP: Record<string, ContentBucket> = {
  home: HOME_BUCKET,
  ...PENGOLAHAN_CONTENT,
  ...INVESTASI_CONTENT,
  ...TEKNIK_CONTENT,
};
