// components/home/HomeRouter.tsx
'use client';

import { useState } from 'react';
import type { HomeView } from '@/lib/types';
import HomeHero from './HomeHero';
import ProfileCards from './ProfileCards';
import PksList from './PksList';
import PksDetailView from './PksDetail';
import PpisDetail from './PpisDetail';
import PpkrDetail from './PpkrDetail';
import { PKS_LIST, getPksDetail } from '@/lib/data/pks';
import NewsSection from './NewsSection';

export default function HomeRouter() {
  const [view, setView] = useState<HomeView>('root');
  const [selectedPksId, setSelectedPksId] = useState<string | null>(null);

  if (view === 'pks-list') {
    return (
      <PksList
        list={PKS_LIST}
        onBack={() => setView('root')}
        onSelect={(id) => {
          setSelectedPksId(id);
          setView('pks-detail');
        }}
      />
    );
  }

  if (view === 'pks-detail' && selectedPksId) {
    const detail = getPksDetail(selectedPksId);
    if (!detail) return null;
    return <PksDetailView detail={detail} onBack={() => setView('pks-list')} />;
  }

  if (view === 'ppis') {
    return <PpisDetail onBack={() => setView('root')} />;
  }

  if (view === 'ppkr') {
    return <PpkrDetail onBack={() => setView('root')} />;
  }

  // root
  return (
    <>
      <HomeHero />
      <ProfileCards
        onPks={() => setView('pks-list')}
        onPpis={() => setView('ppis')}
        onPpkr={() => setView('ppkr')}
      />
      <NewsSection />
    </>
  );
}
