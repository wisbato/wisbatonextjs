import FooterSection from "@/components/Footer/FooterSection";
import HeaderSection from "@/components/Header/HeaderSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import '@/components/Header/Header.css';
import '@/components/EyeExpand/EyeExpand.css';
import '@/components/Footer/Footer.css';
import '@/components/Home/Home.css';
import '@/components/Home/_components/homeSections.css'
import '@/components/InnerBanner/InnerBanner.css'
import '@/components/RoutesMap/breadCrumb.css'
import '@/components/Testimonials/Testimonials.css'
import '@/components/WorkProcess/WorkProcess.css'

import "@/pages/about/about.css"
import "@/pages/about/blog.css"
import "@/pages/about/careers.css"
import "@/pages/about/contact.css"
import "@/pages/about/services.css"
import "@/pages/about/team.css"
import "@/pages/about/team.css"
import "@/pages/about/works.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderSection />
      <Component {...pageProps} />
      <FooterSection />
    </>
  );
}

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }