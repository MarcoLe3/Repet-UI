import MainNavBar from '@/components/Navigation/MainNavbar';
import HeroCard from '@/components/pageSections/Main/MainHeroCard';
import Examples from '@/components/pageSections/Main/Examples';

export default function Home() {
  return (
    <>
      <MainNavBar />
      <main className="flex flex-col">
        <HeroCard />
      </main>
    </>
  );
}

