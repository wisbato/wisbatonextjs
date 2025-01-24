import FooterSection from "@/components/Footer/FooterSection";
import HeaderSection from "@/components/Header/HeaderSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

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

// GTM Function to initialize and track page views
export const initializeGTM = (gtmId: string) => {
  // Initialize GTM script
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Dynamically add GTM script
  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
  document.head.appendChild(script);
};

// Component to handle GTM page views
export const GTMPageView = () => {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url: string) => {
      (window as any).dataLayer.push({
        event: 'pageview',
        page: url
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeGTM('GTM-TXBL8KWB');
  }, []);


  return (
    <>
      <GTMPageView />
      <HeaderSection />
      <Component {...pageProps} />
      <FooterSection />
    </>
  );
}

// Optional: GTM Event Tracking Function
export const trackEvent = (eventName: string, eventData: any = {}) => {
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
};

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }




// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-TXBL8KWB');</script>
// <!-- End Google Tag Manager -->


// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXBL8KWB"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->