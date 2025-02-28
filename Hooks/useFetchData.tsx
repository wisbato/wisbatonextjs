"use client"

import { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';


// blog start

export interface BlogContent {
    title: string;
    image: string;
    alt: string;
    description: string;
}
export interface Blog {
    id: number;
    category: string;
    image: string;
    alt: string;
    title: string;
    description: string;
    slug: string;
    border_color: string;
    meta_title: string;
    meta_description: string;
    content: BlogContent[];
    created_at: string;
}
export type BlogData = Blog;

export const useFetchBlogs = ({ selectedService }: { selectedService?: string }) => {
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const query = selectedService ? `?service_name=${selectedService}` : "";
                const response = await axios.get(`https://backend.wisbato.com/api/blogs${query}`);
                setBlogs(response.data.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedService]); // Add selectedService to the dependency array

    return { blogs, isLoading, error };
};


// export const useFetchBlogs = ({ selectedService }: { selectedService?: string }) => {
//     const [blogs, setBlogs] = useState<BlogData[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<any>(null);

//     const isService = selectedService ? `?service_name=${selectedService}` : `?service_name=${selectedService}`;

//     console.log("isService:", isService)

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsLoading(true);
//             setError(null);

//             try {
//                 const response = await axios.get(`https://backend.wisbato.com/api/blogs${isService}`);
//                 // const response = await axios.get(`https://backend.wisbato.com/api/blogs?service_name=Social Media Marketing`);
//                 // const response = await axios.get(`https://backend.wisbato.com/api/blogs?page=${currentPage}`);
//                 setBlogs(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching blogs:', error);
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return { blogs, isLoading, error };
// };

// blog end

// works start

export interface CaseStudy {
    type: string;
    title: string;
    description: string;
    image: string;
}

export interface Work {
    id: number;
    name: string;
    title: string;
    image: string;
    slug: string;
    themes: string;
    industry: string;
    companyName: string;
    bannerImage: string;
    work_title: string;
    servicesProvides: string[];
    workDescription: string;
    workDescriptionImage: string;
    metaTitle: string;
    metaDescription: string;
    caseStudies: CaseStudy[];
}

export type WorkData = Work;

export const useFetchWorks = ({ selectedService }: { selectedService?: string }) => {
    const [works, setWorks] = useState<WorkData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const query = selectedService ? `?service_name=${selectedService}` : "";
                const response = await axios.get(`https://backend.wisbato.com/api/works${query}`);
                setWorks(response.data.data);
            } catch (error) {
                console.error("Error fetching works:", error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedService]);

    return { works, isLoading, error };
};

// export const useFetchWorks = ({ selectedService }: { selectedService?: string }) => {
//     const [works, setWorks] = useState<WorkData[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<any>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsLoading(true);
//             setError(null);

//             try {
//                 const response = await axios.get('https://backend.wisbato.com/api/works');
//                 setWorks(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching blogs:', error);
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return { works, isLoading, error };
// };

// works end

// careers start

export type Opening = {
    id: number;
    slug: string;
    name: string;
    experience: string;
    location: string;
    category: string;
    bgColor: string;
    description: {
        id: number;
        title: string;
        points: any;
    }[];
};

export const useFetchCareers = () => {
    const [careers, setCareers] = useState<Opening[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/careers');
                setCareers(response.data.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { careers, isLoading, error };
};

// careers end

// team start

export interface TeamMember {
    designation: ReactNode;
    id: number;
    name: string;
    position: string;
    imageUrl: string;
    linkedInUrl?: string;
    email?: string;
}

export interface TeamCategory {
    department: string;
    description: string;
    members: TeamMember[];
    services: string[]
    isActive: boolean;
}

export const useFetchTeam = () => {
    const [team, setTeam] = useState<TeamCategory[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/people');
                setTeam(response.data.data);
            } catch (error) {
                console.error('Error fetching team:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { team, isLoading, error };
};

// team end

// services titles start

export type ServiceTitle = {
    id: number;
    title: string;
    name?: string;
}

export const useFetchServicesTitle = () => {
    const [services, setServices] = useState<ServiceTitle[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/service');
                setServices(response.data.data);
            } catch (error) {
                console.error('Error fetching Services:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { services, isLoading, error };
};
// services titles end

// Gallery start

export type Gallery = {
    id: number;
    image: string;
    isTall: string;
}

export const useFetchGallery = () => {
    const [gallery, setGallery] = useState<Gallery[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/gallery');
                setGallery(response.data.data);
            } catch (error) {
                console.error('Error fetching Services:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { gallery, isLoading, error };
};
// Gallery end

// Footer Contact start

export type ContactDetail = {
    address?:
    {
        place?: string,
        address?: string;
        location_url?: string | undefined;
    }[];
    contact_detail?:
    {
        email?: string[];
        phone?: string[];
    }[]
    title?: string;
    social_media_links?: {
        instagram: string;
        linkedin: string;
        twitter: string;
        facebook: string
    }
}

export const useFetchContactDetail = () => {
    const [contactDetail, setContactDetail] = useState<ContactDetail>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/contact-detail');
                setContactDetail(response.data.data);
            } catch (error) {
                console.error('Error fetching Services:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { contactDetail, isLoading, error };
};

// Footer Contact end



// Service start

export type Card = {
    id: number;
    title: string;
    description: string;
};

export type Summary = {
    id: number;
    title: string;
    description: string[];
};

export type Service = {
    id: number;
    icon?: string;
    slug: string;
    title: string;
    peopleTitle: string;
    description: string;
    image: string;
    style: { backgroundColor: string };
    width: string;
    metaTitle: string;
    metaDescription: string;

    context: {
        mainTitle: string;
        subTitle: string;
        content: string;
    };

    workingProcess: Array<{
        title: string;
        image: string;
        alt: string;
        list: Array<{
            id: number;
            title: string;
            content: string;
        }>;
    }>;

    outcomes: {
        id: number;
        title: string;
        description: string[];
        servicePlatform: {
            id: number;
            icon: string;
            title: string;
        }[];
        subContent: {
            title: string;
            description: string[];
        };
        advantages: {
            id: number;
            title: string;
            description: string;
            points: {
                id: number;
                title: string;
                description: string;
            }[];
        };
        disAdvantages: {
            id: number;
            title: string;
            description: string;
            points: {
                id: number;
                title: string;
                description: string;
            }[];
        };
        question: {
            title: string;
            cards: Card[];
        };
        summery: Summary;
    };

    FAQData: Array<{
        id: number;
        title: string;
        content: string;
    }>;
};

export const useFetchService = () => {
    const [service, setService] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get("https://backend.wisbato.com/api/service");
                setService(response.data.data);
            } catch (error) {
                console.error('Error fetching Services:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { service, isLoading, error };
};

// export const useFetchServiceDetail = (slug?: string | string[]) => {
//     const [service, setService] = useState<Service>();
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<any>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsLoading(true);
//             setError(null);

//             try {
//                 const response = await axios.get(`https://backend.wisbato.com/api/service?slug=${slug}`);
//                 setService(response.data.data[0]);
//             } catch (error) {
//                 console.error('Error fetching Services:', error);
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, [slug]);

//     return { service, isLoading, error };
// };

// Service end