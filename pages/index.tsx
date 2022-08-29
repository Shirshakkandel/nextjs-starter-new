import type { NextPage } from 'next';
import Head from 'next/head';
import { CarouselComponent, Ecosystem, Footer, Hero, MintingDetails } from '../components/HomePage';
import Choice from '../components/HomePage/Choice/Choice';
import DiscordJoin from '../components/HomePage/DiscordJoin/DiscordJoin';
import DistributionChart from '../components/HomePage/DistributionChart/DistributionChart';
import Faq from '../components/HomePage/Faq/Faq';
import NftDetails from '../components/HomePage/NftDetails/NftDetails';
import Roadmap from '../components/HomePage/Roadmap/Roadmap';
import Team from '../components/HomePage/Team/Team';
import TextSlider from '../components/HomePage/TextSlider/TextSlider';
import Utilities from '../components/HomePage/Utilities/Utilities';
import Divider from '../components/shared/Divider';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Daisuki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden text-white">
        <Hero />
        <Divider />
        <TextSlider />
        <CarouselComponent />
        <Ecosystem />
        <MintingDetails />
        <DistributionChart />
        <Choice />
        <Roadmap />
        <Utilities />
        <Team />
        <NftDetails />
        <Faq />
        <DiscordJoin />
      </main>
    </div>
  );
};

export default Home;
