import Head from 'next/head';
import BlogsPage from './_components/BlogsPage'
import { MetaTags } from '@/Hooks/useFetchMetaTags';

const Blogs = ({ meta }: { meta: MetaTags }) => {

    return (
        <>
            <Head>
                <title>{meta?.title || "Home | Default Title"}</title>
                <meta name="description" content={meta?.description || "Explore our portfolio and past projects."} />
                <meta property="og:title" content={meta?.title || "Works | Default Title"} />
                <meta property="og:description" content={meta?.description || "Explore our portfolio and past projects."} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://wisbato.com/blogs" />
            </Head>
            <BlogsPage />
        </>
    )
}

export default Blogs;

export async function getServerSideProps() {
    try {
        const res = await fetch("https://backend.wisbato.com/api/metatags?name=blogs");
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
