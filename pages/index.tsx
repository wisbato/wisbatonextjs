"use client";
import Head from "next/head";
import Homee from "../components/Home/Home.tsx";
// import { useRouter } from "next/router";

export default function Home() {
  
  // const router = useRouter();

  // const navigateTo = (path: string) => {
  //   router.push(path);
  // };

  return (
    <>
      <Head>
        <title>Home - My Next App</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      <Homee />
    </>
  );
}