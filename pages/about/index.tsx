import Head from "next/head";
import AboutPage from "./AboutPage"
import { MetaTags } from "@/Hooks/useFetchMetaTags";


const About = ({ meta }: { meta: MetaTags }) => {
    return <>
        <Head>
            <title>{meta?.title || "Works | Default Title"}</title>
            <meta name="description" content={meta?.description || "Explore our portfolio and past projects."} />
            <meta property="og:title" content={meta?.title || "Works | Default Title"} />
            <meta property="og:description" content={meta?.description || "Explore our portfolio and past projects."} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://wisbato.com/about" />
        </Head>

        <AboutPage />
    </>
}

export default About;


export async function getServerSideProps() {
    try {
        const res = await fetch("https://backend.wisbato.com/api/metatags?name=about");
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