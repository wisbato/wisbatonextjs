// "use client";

import { MetaTags } from "@/Hooks/useFetchMetaTags.tsx";
import Homee from "../components/Home/Home.tsx";
import Head from "next/head";

export default function Home({ meta }: { meta: MetaTags }) {

  return (
    <>
      <Head>
        <title>{meta?.title || "Home | Default Title"}</title>
        <meta name="description" content={meta?.description || "Explore our portfolio and past projects."} />
        <meta property="og:title" content={meta?.title || "Works | Default Title"} />
        <meta property="og:description" content={meta?.description || "Explore our portfolio and past projects."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wisbato.com/" />
      </Head>
      <Homee />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://backend.wisbato.com/api/metatags?name=Home");
    const data = await res.json();

    return {
      props: { meta: data.data[0] },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      props: { meta: null },
    };
  }
}