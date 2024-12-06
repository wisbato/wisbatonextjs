"use client"

import InnerBanner from "@/components/InnerBanner/InnerBanner";
import { useFetchBlogs } from "@/Hooks/useFetchData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import ReadFullBtn from "./ReadFullBtn";
import DropDown from "@/components/DropDown";
import BlogCard from "./BlogCard";
import ReactPaginate from "react-paginate";

const BlogsPage = () => {
    const router = useRouter()

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();
        router.push(`/blogs/${data}?`)
        window.scrollTo(0, 0)
    };

    const [currentPage, setCurrentPage] = useState(0);
    const { blogs, isLoading } = useFetchBlogs();

    const itemsPerPage = 6;
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogs?.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div className='blog-section page-transition'>
            <InnerBanner nextSection={'.blog-list-container'} text={"visit our <br> <span>blog</span>"} icons={["blogIcon1", "blogIcon2", "blogIcon2"]} />
            <div className="blog-list-container">
                {
                    blogs.length === 0 || isLoading ?
                        <div className="recent-blog-container">
                            <p className='recent-blog-container-title' ><Skeleton width={100} /></p>
                            <div className="recent-blog">
                                <Skeleton className='recent-blog-skeleton-img' height={300} />

                                <div className="recent-blog-content-div">
                                    <div className="recent-blog-content">
                                        <Skeleton width={100} />
                                        <Skeleton count={3} />
                                    </div>
                                    <Skeleton width={100} />
                                </div>
                            </div>
                        </div> : <div className="recent-blog-container">
                            <p className='recent-blog-container-title' >recent</p>
                            <div className="recent-blog">
                                <img
                                    src={blogs[0]?.image}
                                    alt="Your image alt text"
                                    className='recent-blog-img'
                                />

                                <div className="recent-blog-content-div">
                                    <div className="recent-blog-content">
                                        <p>{blogs[0].title}</p>
                                        <p>{blogs[0].description.slice(0, 300)}...</p>
                                    </div>
                                    <ReadFullBtn title='read full' onClick={() => handleNavigation(blogs[0].slug)} />
                                </div>
                            </div>
                        </div>
                }

                <div className="list-all-blogs-section">
                    {
                        blogs.length === 0 || isLoading ?
                            <div className="all-blogs-title-section">
                                <p className='recent-blog-container-title' ><Skeleton width={100} /></p>
                                <Skeleton width={200} height={50} />
                            </div>
                            :
                            <div className="all-blogs-title-section">
                                <p className='recent-blog-container-title' >all blogs</p>
                                <DropDown />
                            </div>
                    }

                    {blogs.length === 0 || isLoading ?
                        <div className="list-all-blogs">
                            {
                                Array.from({ length: 2 }).map((_, i) => <div key={i} className="blog-card">
                                    <Skeleton className='list-blog-skeleton-img' height={300} />
                                    <div className="blog-card-content-div">
                                        <p className='recent-blog-container-title' style={{ fontSize: "14px", marginBottom: "4px" }} ><Skeleton width={100} /></p>
                                        <p className='blog-card-title' ><Skeleton width={200} /></p>
                                        <p className='blog-card-description' ><Skeleton count={2} /></p>
                                        <Skeleton width={100} />
                                    </div>
                                </div>)
                            }
                        </div>
                        :
                        <div className="list-all-blogs">
                            {
                                currentItems.map((item) => <BlogCard key={item?.id} data={item} />)
                            }
                        </div>
                    }
                    {!isLoading && <div className='pagination-section'>
                        {blogs.length > 2 && (
                            <ReactPaginate
                                previousLabel={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5831 4L8.9964 10.5866C8.62508 10.9633 8.41693 11.471 8.41693 12C8.41693 12.529 8.62508 13.0367 8.9964 13.4134L15.5831 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                }
                                nextLabel={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                }
                                breakLabel={"..."}
                                pageCount={Math.ceil(blogs.length / itemsPerPage)}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={4}
                                onPageChange={handlePageChange}
                                containerClassName={"custom-pagination"}
                                pageClassName={"custom-pagination-item"}
                                previousClassName={"custom-pagination-item"}
                                nextClassName={"custom-pagination-item"}
                                activeClassName={"custom-pagination-active"}
                            />
                        )}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default BlogsPage
