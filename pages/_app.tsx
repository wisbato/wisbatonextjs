import FooterSection from "@/components/Footer/FooterSection";
import HeaderSection from "@/components/Header/HeaderSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import '@/components/Header/Header.css';
import '@/components/EyeExpand/EyeExpand.css';
import '@/components/Footer/Footer.css';
import '@/components/Home/Home.css';
import '@/components/InnerBanner/InnerBanner.css'
import '@/components/RoutesMap/breadCrumb.css'
import '@/components/Testimonials/Testimonials.css'
import '@/components/WorkProcess/WorkProcess.css'


import "@/pages/about/about.css"
import "@/pages/blogs/blogs.css"
import "@/pages/careers/careers.css"
import "@/pages/contact/contact.css"
import "@/pages/services/services.css"
import "@/pages/team/team.css"
import "@/pages/works/works.css"

import "@/pages/careers/_components/ResumeUpload.css"
import '@/pages/team/_components/teamcatecard.css'
import '@/components/Home/_components/homeSections.css'

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