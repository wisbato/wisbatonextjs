import Image from "next/image";
import useScrollAnimation from "../../../Hooks/useScrollAnimation";

const CaseStudies = ({ item }: { item: { type: string; title: string; description: string; image: string; } }) => {
    const animateRef: React.RefObject<HTMLDivElement | null> = useScrollAnimation();

    return (
        <div className="case-studies-section visible-section" ref={animateRef}>
            <div className="case-studies-section-desc">
                <h2>{item?.type}</h2>
                <h1>{item?.title}</h1>
                <div className="work-description-paragraphs" dangerouslySetInnerHTML={{ __html: item?.description }} />
            </div>

            <div className="case-studies-images">
                <Image width={1000} height={500} src={item?.image} alt="..." />
            </div>
        </div>
    )
}

export default CaseStudies
