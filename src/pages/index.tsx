import { HeroSec, Magazines, Projects } from "@/features/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSec />
      <Projects />
      <Magazines />
    </>
  );
}
