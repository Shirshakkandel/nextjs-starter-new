import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/HomePage';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Daisuki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
