import React, { useEffect, useRef, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import { Blog, useFetchBlogs } from '../../../Hooks/useFetchData';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import { useNavigate } from 'react-router-dom';

interface Heading {
    id: string;
    title: string;
    tagName: string;
}

interface BlogDetailedSectionProps {
    detailedBlog: Blog | undefined;
}

const BlogDetailedSection: React.FC<BlogDetailedSectionProps> = ({ detailedBlog }) => {
    const blogDetailRef = useRef<HTMLDivElement>(null);
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [htmlContent, setHtmlContent] = useState('');
    const { blogs, isLoading } = useFetchBlogs();

    const testHtml: string = detailedBlog?.content[0]?.description || '';

    useEffect(() => {
        if (!detailedBlog?.content) return;

        const tempDiv: HTMLDivElement = document.createElement('div');
        tempDiv.innerHTML = testHtml;

        const headingNodes: NodeListOf<HTMLHeadingElement> = tempDiv.querySelectorAll('h2, h3');
        const headingArray: Heading[] = Array.from(headingNodes).map((node: HTMLHeadingElement, index: number) => {
            const id: string = `heading-${index}`;
            node.id = id;
            return {
                id,
                title: node.textContent || '',
                tagName: node.tagName.toLowerCase(),
            };
        });

        setHeadings(headingArray);
        setHtmlContent(tempDiv.innerHTML);
    }, [detailedBlog?.content, testHtml]);

    const handleTitleClick = (id: string) => {
        if (typeof window !== 'undefined') {
            const element = document.getElementById(id);
            if (element) {
                const offsetPosition = element.getBoundingClientRect().top + window?.scrollY - 70;
                window?.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }
    };

    // const handleTitleClick = (id: string) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         const offsetPosition = element.getBoundingClientRect().top + window?.scrollY - 70;
    //         window?.scrollTo({
    //             top: offsetPosition,
    //             behavior: 'smooth',
    //         });
    //     }
    // };

    return (
        <div className="blog-content-section">
            <Head>
                <title>{detailedBlog?.meta_title}</title>
                <meta name="description" content={detailedBlog?.meta_description} />
                <link rel="canonical" href={`https://www.wisbato.com/blogs/${detailedBlog?.slug}`} />
            </Head>

            {isLoading ? (
                <LoadingBlogHeader />
            ) : (
                <BlogHeader title={detailedBlog?.title} />
            )}

            <div className="detailed-blog-seperate-section">
                <TableOfContents headings={headings} onTitleClick={handleTitleClick} />

                {isLoading ? (
                    <LoadingBlogContent />
                ) : (
                    <span className="subtitle-content-section" >
                        <div ref={blogDetailRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </span>
                )}

                {isLoading ? (
                    <LoadingSubBlogs />
                ) : (
                    <SubBlogs recentBlogs={blogs.slice(0, 3).filter((item) => item?.slug !== detailedBlog?.slug)} popularBlogs={blogs.slice(0, -1).filter((item) => item?.slug !== detailedBlog?.slug)} />
                )}
            </div>
        </div>
    );
};

const LoadingBlogHeader: React.FC = () => (
    <div className="detailed-blog-title-div">
        <p className="detailed-blog-title"><Skeleton width={150} height={30} /></p>
        <Skeleton width={100} height={30} />
    </div>
);

const BlogHeader: React.FC<{ title: string | undefined }> = ({ title }) => {
    return (
        <div className="detailed-blog-title-div">
            <p className="detailed-blog-title">{title}</p>
            <ShareButton />
        </div>
    )
};

const ShareButton: React.FC = () => (
    <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.01472 15.8088C7.81776 15.8088 9.27942 14.3472 9.27942 12.5441C9.27942 10.7411 7.81776 9.27942 6.01472 9.27942C4.21167 9.27942 2.75001 10.7411 2.75001 12.5441C2.75001 14.3472 4.21167 15.8088 6.01472 15.8088Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9853 9.27941C19.7883 9.27941 21.25 7.81775 21.25 6.01471C21.25 4.21166 19.7883 2.75 17.9853 2.75C16.1822 2.75 14.7206 4.21166 14.7206 6.01471C14.7206 7.81775 16.1822 9.27941 17.9853 9.27941Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9853 21.25C19.7883 21.25 21.25 19.7883 21.25 17.9853C21.25 16.1822 19.7883 14.7206 17.9853 14.7206C16.1822 14.7206 14.7206 16.1822 14.7206 17.9853C14.7206 19.7883 16.1822 21.25 17.9853 21.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0144 16.6359L8.9856 13.8935" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.1124 7.58176L8.88765 10.9771" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>share</p>
    </button>
);

const TableOfContents: React.FC<{ headings: Heading[], onTitleClick: (id: string) => void }> = ({ headings, onTitleClick }) => (
    <div className='blog-title-navigate-section'>
        <p>table of content</p>
        <div className='blog-title-navigates'>
            {headings.map((item, i) => (
                <p key={i} onClick={() => onTitleClick(item.id)}>{item.title}</p>
            ))}
        </div>
    </div>
);

const LoadingBlogContent: React.FC = () => (
    <div className="subtitle-content-section" style={{ width: "100%" }}>
        <p className='paragraph' style={{ width: "100%" }}><Skeleton count={3} /></p>
        <div className="blog-points-section" style={{ width: "100%" }}>
            <p className='numbered-list'><Skeleton height={30} /></p>
            <p className='paragraph'><Skeleton count={3} /></p>
            <Skeleton height={200} />
        </div>
    </div>
);

const LoadingSubBlogs: React.FC = () => (
    <div className='sub-blogs-section' style={{ width: "100%" }}>
        <LoadingSubBlogSection />
        <LoadingSubBlogSection />
    </div>
);

const LoadingSubBlogSection: React.FC = () => (
    <div className='sub-blogs'>
        <p><Skeleton width={100} /></p>
        {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className='sub-blog'>
                <p><Skeleton height={130} /></p>
                <p><Skeleton count={2} /></p>
            </div>
        ))}
    </div>
);

const SubBlogs: React.FC<{ recentBlogs: Blog[], popularBlogs: Blog[] }> = ({ recentBlogs, popularBlogs }) => (
    <div className='sub-blogs-section'>
        <SubBlogSection title="recent posts" blogs={recentBlogs} />
        <SubBlogSection title="popular posts" blogs={popularBlogs} />
    </div>
);

const SubBlogSection: React.FC<{ title: string, blogs: Blog[] }> = ({ title, blogs }) => {
    // const navigate = useNavigate()
    const router = useRouter()

    const isRecent = title === "recent posts"
    return (
        <div className='sub-blogs'>
            <p>{title}</p>
            {blogs.slice(isRecent ? 0 : 3, 8).map((blog, i) => (
                <div style={{ cursor: "pointer" }} key={i} className='sub-blog' onClick={() => {
                    router.push(`/blogs/${blog.slug}`)
                    scrollTo(0, 0)
                }} >
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        width={800}
                        height={300}
                        className='sub-blog-img' src={blog.image} alt={blog.title} />
                    <p>{blog.title}</p>
                </div>
            ))}
        </div>
    )
};

export default BlogDetailedSection;