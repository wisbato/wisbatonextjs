// "use client";

// import React, { useEffect, useRef } from "react";
// import lottie, { AnimationItem } from "lottie-web";

// const AnimationComponent: React.FC = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const animationRef = useRef<AnimationItem | null>(null);

//     useEffect(() => {
//         // Ensure the code runs only in the browser
//         if (typeof window !== "undefined" && containerRef.current) {
//             import("../../assets/Lottie/buttonLoading.json")
//                 .then((animationData) => {
//                     animationRef.current = lottie.loadAnimation({
//                         container: containerRef.current,
//                         renderer: "svg",
//                         loop: true,
//                         autoplay: true,
//                         animationData: animationData.default || animationData,
//                     });
//                 })
//                 .catch((err) => console.error("Failed to load Lottie animation:", err));
//         }

//         return () => {
//             if (animationRef.current) {
//                 animationRef.current.destroy();
//             }
//         };
//     }, []);

//     return <div ref={containerRef} style={{ height: "50px", width: "50px" }} />;
// };

// export default AnimationComponent;


/////////////////////////////////////////

"use client"

import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

const AnimationComponent: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem | null>(null);

    useEffect(() => {
        // if (containerRef.current) {
        if (typeof window !== "undefined" && containerRef.current) {
            import('../../assets/Lottie/buttonLoading.json').then((animationData) => {
                animationRef.current = lottie.loadAnimation({
                    container: containerRef.current!,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: animationData.default
                });
            });
        }

        return () => {
            if (animationRef.current) {
                animationRef.current.destroy();
            }
        };
    }, []);

    return <div ref={containerRef} style={{ height: "50px", width: "50px" }} />;
};

export default AnimationComponent;