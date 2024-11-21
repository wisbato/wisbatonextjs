"use client"

import InnerBanner from "@/components/InnerBanner/InnerBanner"
import Testimonials from "@/components/Testimonials/Testimonials"
import Test from "@/components/WorkProcess/Test"
import WorkProcessMobile from "@/components/WorkProcess/WorkProcessMobile"

const AboutPage = () => {
    return (
        <div className='about-section page-transition' >
            <InnerBanner nextSection={'.about-cards-section'} text={"About <br> <span>wisbato</span>"} icons={["aboutIcon", "aboutIcon", "aboutIcon"]} />

            <div className="about-cards-section">
                <ul id="about-cards">
                    <li className="about-card" id="about-card1">
                        <div className="about-card-body">
                            <div className="about-content-div">
                                <p>our story</p>
                                <p>Being one of the leading names in the industry, we at Wisbato believe in offering the best web solutions to our esteemed clients. The methodology that we take is accountable and is proven. We have established a stellar track record for providing exceptional results across all digital platforms such as social media or paid search campaigns. We recognise that the implementation of an effective online marketing strategy involves teamwork a team of individuals with the right skills, passion and expertise. So, when you work with us, you are getting to collaborate with a team of individuals who are just as dedicated and elated about growing your business as you are!</p>
                            </div>
                            <div className="about-content-cards-count">
                                {/* <p>01/03</p> */}
                            </div>
                        </div>
                    </li>
                    <li className="about-card" id="about-card2">
                        <div className="about-card-body">
                            <div className="about-content-div">
                                <p>our mission</p>
                                <p>Our mission is to provide the best results to our clients and assure their success as we aim to establish a varied client base of businesses and individuals operating in a multitude of sectors and economies. While we collaborate with our clients, we will be the finest as we strive to deliver, successful, innovative, creative web solutions that address particular objectives and requirements.</p>
                            </div>
                            <div className="about-content-cards-count">
                                {/* <p>02/03</p> */}
                            </div>
                        </div>
                    </li>
                    <li className="about-card" id="about-card3">
                        <div className="about-card-body">
                            <div className="about-content-div">
                                <p>our vision</p>
                                <p>Our vision is to be the trusted partner of our esteemed clientele. We plan to accomplish the same by providing the best web solutions in the most transparent, ROI-focused and honest approach. We aspire to operate all over the globe and leverage the benefits of IT to enhance the overall standard of the products and services of our clients.</p>
                            </div>
                            <div className="about-content-cards-count">
                                {/* <p>03/03</p> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="work-process-section-x">
                <Test />
            </div>
            <div className="work-process-section-y">
                <WorkProcessMobile />
            </div>
            <Testimonials />
        </div>
    )
}

export default AboutPage
