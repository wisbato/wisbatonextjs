import FooterSection from "@/components/Footer/FooterSection";
import HeaderSection from "@/components/Header/HeaderSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import "@/components/Header/Header.css";
import "@/components/EyeExpand/EyeExpand.css";
import "@/components/Footer/Footer.css";
import "@/components/Home/Home.css";
import "@/components/InnerBanner/InnerBanner.css";
import "@/components/RoutesMap/breadCrumb.css";
import "@/components/Testimonials/Testimonials.css";
import "@/components/WorkProcess/WorkProcess.css";

import "@/pages/about/about.css";
import "@/pages/blogs/blogs.css";
import "@/pages/careers/careers.css";
import "@/pages/contact/contact.css";
import "@/pages/services/services.css";
import "@/pages/team/team.css";
import "@/pages/works/works.css";

import "@/pages/careers/_components/ResumeUpload.css";
import "@/pages/team/_components/teamcatecard.css";
import "@/components/Home/_components/homeSections.css";
import ChatIcon from "@/components/ChatIcon/ChatIcon";
import ToastMessage from "@/components/ToastMessage";
import { StatusContext } from "@/Hooks/StatusContext";

interface Window {
  dataLayer?: Array<Record<string, unknown>>;
}

interface EventData {
  [key: string]: string | number | boolean | undefined;
}

// Google Analytics Tracking ID
const GA_TRACKING_ID = "G-CMM0518P02";

// Initialize GTM
export const initializeGTM = (gtmId: string) => {
  (window as Window).dataLayer = (window as Window).dataLayer || [];
  (window as Window).dataLayer?.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
  document.head.appendChild(script);
};

// Track GTM Page Views
export const GTMPageView = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      (window as Window).dataLayer?.push({
        event: "pageview",
        page: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

// Track Google Analytics Page Views
export const trackPageView = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track Custom Events in GA
export const trackEvent = (eventName: string, eventData: EventData = {}) => {
  if ((window as Window).dataLayer) {
    (window as Window).dataLayer?.push({
      event: eventName,
      ...eventData,
    });
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    initializeGTM("GTM-5XCQZZ57"); // GTM ID (Replace if needed)

    // Google Analytics Page View Tracking
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Google Tag Manager (GTM) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-5XCQZZ57`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Google Analytics (GA4) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
          `,
        }}
      />

      <GTMPageView />
      <HeaderSection />
      <Component {...pageProps} />
      <ChatIcon />
      <FooterSection />
    </>
  );
};