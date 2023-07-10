import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Drumshop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full ">
        <div className=" mt-20 flex h-screen w-full flex-col items-center">
          <div className="flex flex-col gap-4 p-24 sm:flex-row">
            <p className="text-5xl">Welcome to</p>
            <h1 className="font-title text-7xl font-bold tracking-widest overline decoration-stone-400">
              Drumshop
            </h1>
          </div>
          <div className="flex w-64 justify-center p-2">
            <Link href="/catalog">
              <button className="border-2 border-slate-500 bg-zinc-700 py-4 px-16 text-xl text-white duration-300 hover:bg-stone-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
