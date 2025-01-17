import { useCallback, useEffect, useRef, useState } from "react";
// import "./WorkProcess.css"
import { workProcessCard } from "../../utils/WorkProcessCard";
import Image from "next/image";

interface WorkProcessCardItem {
    id: number;
    title: string;
    content: string[];
    color: string;
    x: number;
    y: number;
}

interface PointPosition {
    x: number;
    y: number;
}

interface PopupPositions {
    x: number;
    y: number;
    content: WorkProcessCardItem;
}

const WorkProcessDesktop = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [progress, setProgress] = useState<number>(0);
    const [pointPosition, setPointPosition] = useState<PointPosition>({ x: 51.701698303222656, y: 0 });
    const [popupPositions, setPopupPositions] = useState<PopupPositions | null>(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (containerRef.current) {
    //             const containerWidth = containerRef.current.clientHeight;
    //             const scrollLeft = containerRef.current.scrollTop;
    //             const scrollWidth = containerRef.current.scrollHeight;

    //             const scrollProgress = (scrollLeft / (scrollWidth - containerWidth)) * 100;
    //             setProgress(scrollProgress);
    //             updatePointPosition(scrollProgress);
    //         }
    //     };

    //     containerRef?.current?.addEventListener('scroll', handleScroll);

    //     return () => {
    //         containerRef?.current?.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(prevProgress => prevProgress + 1);
            }
        }, 20);

        return () => clearInterval(timer);
    }, [progress]);

    const updatePointPosition = useCallback((newProgress: number) => {
        // const updatePointPosition = (newProgress: number) => {
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            const newPathLength = pathLength * (newProgress / 100);

            const { x, y } = pathRef.current.getPointAtLength(newPathLength);

            setPointPosition({ x, y });

            checkCollisionWithBlackCircles(x, y);
        }
        // };

    }, []);

    useEffect(() => {
        const containerElement = containerRef.current;

        const handleScroll = () => {
            if (containerElement) {
                const containerHeight = containerElement.clientHeight;
                const scrollTop = containerElement.scrollTop;
                const scrollHeight = containerElement.scrollHeight;

                const scrollProgress = (scrollTop / (scrollHeight - containerHeight)) * 100;
                setProgress(scrollProgress);
                updatePointPosition(scrollProgress);  // ✅ Stable reference now
            }
        };

        containerElement?.addEventListener('scroll', handleScroll);

        return () => {
            containerElement?.removeEventListener('scroll', handleScroll);
        };
    }, [updatePointPosition]);


    const checkCollisionWithBlackCircles = (x: number, y: number) => {
        const circles = document.querySelectorAll('circle[id^="point"]');
        circles.forEach((circle) => {
            const cx = parseFloat(circle.getAttribute("cx") || "0");
            const cy = parseFloat(circle.getAttribute("cy") || "0");

            const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

            if (distance <= 50) {
                const index = parseInt(circle.id.slice(-1)) - 1;
                const popupContent = workProcessCard[index];

                setPopupPositions({ x: cx, y: cy, content: popupContent });
            }
        });
    };

    return (
        <div style={{ maxHeight: "100vh", backgroundColor: "", position: "relative" }}>
            <h1 style={{
                position: "absolute", left: "60px", fontSize: "72px", fontWeight: "500"
            }} >WORK PROCESS</h1>
            <div ref={containerRef} className="horizontal-section" id="horizontalScrollSection">
                <div className="boxes">
                    <svg style={{ transform: "rotate(-90deg)", backgroundColor: "" }} width="454" height="5400" viewBox="-55 -55 454 5000" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={pathRef} d="M51.7017 0C51.7017 0 244.866 242.805 244.866 930.112C244.866 1617.42 20.9234 1492.92 3.91371 2174.59C-13.7255 2881.49 229.643 2748.94 249.141 3441.15C272.2 4259.75 73.0805 5000 73.0805 5000" stroke="black" strokeWidth="1" />
                        <g className="check-point-icon" fill="#C3DFFF">
                            <circle id="pointA 1" cx="51.701698303222656" cy="0" r="50" />
                            <image x={51.701698303222656 - 30} y={0 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/1.svg" />
                        </g>

                        <g className="check-point-icon" fill="#DCD2F7">
                            <circle id="pointB 2" cx="234.14755249023438" cy="1163.5897216796875" r="50" />
                            <image x={234.14755249023438 - 27} y={1163.5897216796875 - 27} xlinkHref="/svgIcons/checkPointsIcon/desktop/2.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F7D2DB">
                            <circle id="pointC 3" cx="4.14755249023438" cy="2162.186279296875" r="50" />
                            <image x={4.14755249023438 - 29} y={2162.186279296875 - 29} xlinkHref="/svgIcons/checkPointsIcon/desktop/3.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F5C9FD">
                            <circle id="pointD 4" cx="249.7351531982422" cy="3464.423095703125" r="50" />
                            <image x={249.7351531982422 - 30} y={3464.423095703125 - 22} xlinkHref="/svgIcons/checkPointsIcon/desktop/4.svg" />
                        </g>

                        <g className="check-point-icon" fill="#FFE3C2">
                            <circle id="pointE 5" cx="73.08049774169922" cy="5000" r="50" />
                            <image x={73.08049774169922 - 22} y={5000 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/5.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F7931E">
                            <circle cx={pointPosition.x} cy={pointPosition.y} r="50" />
                            <image x={pointPosition.x - 25} y={pointPosition.y - 40} xlinkHref="/svgIcons/checkPointsIcon/desktop/move.svg" />
                        </g>

                        {popupPositions && (
                            <foreignObject x={popupPositions.x - popupPositions.content.x} y={popupPositions.y - popupPositions.content.y} style={{ width: "500px", height: "500px", borderRadius: "8px", position: "relative", padding: "10px" }} >
                                <div className="work-process-card" style={{ backgroundColor: popupPositions.content.color }}>
                                    <div className="title-div">
                                        <Image src={`/svgIcons/checkPointsIcon/desktop/${popupPositions.content.id}.svg`} alt="" width={60} height={60} />
                                        {/* <img src={`/svgIcons/checkPointsIcon/desktop/${popupPositions.content.id}.svg`} alt="" /> */}
                                        <h1>{popupPositions.content.title}</h1>
                                    </div>
                                    <div className="work-process-points" >
                                        {
                                            popupPositions.content.content.map((itm: string, i: number) => <ul key={i}>
                                                <li>{itm}</li>
                                            </ul>)
                                        }
                                    </div>
                                </div>
                            </foreignObject>
                        )}
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default WorkProcessDesktop