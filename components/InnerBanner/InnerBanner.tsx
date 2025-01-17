// import "./InnerBanner.css"
// import "../Home/Home.css"
import ScrollButton from '../ScrollButton'
import Image from "next/image";
// import { useLenis } from "@/Hooks/useLenis";

const InnerBanner = ({ text, icons, nextSection }: { text: string; icons: string[]; nextSection: string }) => {
    // useLenis();
    return (
        <div className='inner-banner-section'>
            <h1 className='banner-title' dangerouslySetInnerHTML={{ __html: text }}></h1>
            <span className="inner-banner-icons">
                {
                    icons?.map((item, i) =>
                        <Image width={80} height={80} key={i} className='gravity-icon shadow' src={`/svgIcons/${item}.svg`} alt="" />
                        // <img key={i} className='gravity-icon shadow' src={`/svgIcons/${item}.svg`} alt="" />
                    )
                }
            </span>

            <div style={{ position: "relative", top: "110px" }} >
                <ScrollButton nextSection={nextSection} color='#000' hide={true} />
            </div>
        </div>
    )
}

export default InnerBanner
