"use client"

import InnerBanner from "@/components/InnerBanner/InnerBanner"
import TeamCateCard from "./TeamCateCard"
import { useLenis } from "@/Hooks/useLenis";
import Image from "next/image";

const TeamPage = () => {
    useLenis();

    return (
        <div className="team-section page-transition" >
            <InnerBanner nextSection={'.team-section'} text={'<span>team</span> <br> wisbato'} icons={["careersIcon1", "careersIcon2", "careersIcon3"]} />

            <div className="team-banner-section" >
                <div className="banner-content-wrapper" >
                    <Image width={1000} height={500} className="team-banner-image" src="/images/image.webp" alt="team image" />
                    <div className="team-banner-title">
                        <h2>What We Build</h2>
                        <p>Empowering Ideas, Transforming Innovation Into Reality</p>
                    </div>
                </div>

                <div className="sub-content">
                    {/* <p>Meet the talented team behind our success</p> */}
                    <p>Meet our team</p>
                </div>
            </div>
            <TeamCateCard />
            <div className="team-moments-wrapper" >
                <div className="team-moments">
                    <div className="team-content">
                        <h2>Together We Celebrate</h2>
                        <p>&quot;Highlighting our teamwork and joyous moments&quot;</p>
                    </div>

                    <div className="gallery">
                        <div className="image-container">
                            {/* <img src="/images/events/img1.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img1.webp" />
                        </div>
                        <div className="image-container">
                            {/* <img src="/images/events/img2.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img2.webp" />
                        </div>
                        <div className="image-container tall">
                            {/* <img src="/images/events/img5.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img5.webp" />
                        </div>
                        <div className="image-container">
                            {/* <img src="/images/events/img9.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img9.webp" />
                        </div>
                        <div className="image-container">
                            {/* <img src="/images/events/img3.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img3.webp" />
                        </div>
                        <div className="image-container tall">
                            {/* <img src="/images/events/img8.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img8.webp" />
                        </div>
                        <div className="image-container">
                            {/* <img src="/images/events/img4.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img4.webp" />
                        </div>
                        <div className="image-container tall ">
                            {/* <img src="/images/events/img11.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img11.webp" />
                        </div>
                        <div className="image-container tall">
                            {/* <img src="/images/events/img12.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img12.webp" />
                        </div>
                        <div className="image-container">
                            {/* <img src="/images/events/img6.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img6.webp" />
                        </div>
                        <div className="image-container">
                            {/* <img src="/images/events/img10.webp" /> */}
                            <Image alt="" width={300} height={200} src="/images/events/img10.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage
