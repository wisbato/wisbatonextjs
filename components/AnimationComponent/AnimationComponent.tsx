import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const AnimationComponent: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<any>(null);

    useEffect(() => {
        if (containerRef.current) {
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

// import React from 'react';
// import Lottie from 'react-lottie';
// import animationData from '../../assets/Lottie/buttonLoading.json';

// const AnimationComponent: React.FC = () => {
//     const defaultOptions = {
//         loop: true,
//         autoplay: true,
//         animationData: animationData,
//         rendererSettings: {
//             preserveAspectRatio: 'xMidYMid slice',
//         },
//     };

//     return <div style={{ height: "50px", width: "50px" }} ><Lottie options={defaultOptions} /></div>;
// };

// export default AnimationComponent;