import { HeroSec, Projects, Magazines } from "@/features/home/index";
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
