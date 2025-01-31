// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { useNavigate } from 'react-router-dom';
import { BlogData } from '../../../Hooks/useFetchData';

import ReadFullBtn from './ReadFullBtn'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const BlogCard = ({ data }: { data: BlogData }) => {
    // const navigate = useNavigate()
    const router = useRouter();

    const handleNavigation = (title: string) => {
        const data = title?.replace(/[^\w]+/gi, "-").toLowerCase();
        // if (typeof window !== 'undefined') {
        //     window.scrollTo(0, 0);
        // }

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        router.push(`/blogs/${data}`);
    };

    const title = data?.title?.slice(0, 35)
    const description = data?.description?.slice(0, 100)
    return (
        <div className="blog-card" style={{ borderBottom: `10px solid ${data?.border_color}` }} >
            <Image
                style={{ width: '100%', height: '100%' }}
                width={800}
                height={500}
                src={data?.image}
                alt="Your image alt text"
                className='blog-card-img'
            />
            {/* <LazyLoadImage
                src={data.image}
                alt="Your image alt text"
                className='blog-card-img'
            /> */}
            <div className="blog-card-content-div">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                    <p className='recent-blog-container-title' style={{ fontSize: "14px", marginBottom: "4px" }} >{data?.category}</p>
                    <p className='recent-blog-container-title' style={{ fontSize: "14px", marginBottom: "4px" }} >{data?.created_at}</p>
                </div>
                <p className='blog-card-title' >{title}...</p>
                <p className='blog-card-description' >{description}...</p>
                <ReadFullBtn title='read full' onClick={() => handleNavigation(data?.slug)} />
            </div>
        </div>
    )
}

export default BlogCard
