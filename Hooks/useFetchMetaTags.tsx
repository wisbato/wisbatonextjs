"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

export type MetaTags = {
    title: string;
    description: string;
    keywords: string;
    name: string;
}

export const useFetchMetaTags = (slug: string) => {
    const [metaTags, setMetaTags] = useState<MetaTags>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!slug) return;

            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://backend.wisbato.com/api/metatags?name=${slug}`
                );

                if (response.data && response.data.data && response.data.data[0]) {
                    setMetaTags(response.data.data[0]);
                } else {
                    setError(new Error('No data found'));
                }
            } catch (error) {
                console.error('Error fetching meta tags:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    return { metaTags, isLoading, error };
};

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export const useFetchMetaTags = (slug: string) => {
//     const [metaTags, setMetaTags] = useState<{ name: string; title: string; description: string; }>();
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<any>(null);

//     useEffect(() => {

//         const fetchData = async () => {
//             setIsLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(
//                     `https://backend.wisbato.com/api/metatags?name=${slug}`
//                 );
//                 setMetaTags(response.data.data[0]);
//             } catch (error) {
//                 console.error('Error fetching meta tags:', error);
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (slug) {
//             fetchData();
//         }
//     }, [slug]);

//     return { metaTags, isLoading, error };
// };

export const useFetchNavLinks = () => {
    const [navLinks, setNavLinks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `https://backend.wisbato.com/api/metatags`
                );
                setNavLinks(response.data.data);
            } catch (error) {
                console.error('Error fetching nav links:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, []);

    return { navLinks, isLoading, error };
};