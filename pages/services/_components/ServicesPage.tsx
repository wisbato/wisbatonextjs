"use client"

import { useRouter } from "next/navigation";
import { services } from "@/utils/servicesData";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import DefaultButton from "@/components/DefaultButton";
import Testimonials from "@/components/Testimonials/Testimonials";
import { useLenis } from "@/Hooks/useLenis";

const ServicesPage = () => {
    useLenis();

    const router = useRouter()

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();
        router.push(`/services/${data}`);
        window.scrollTo(0, 0);
    };

    const isLoading = !services;
    return (
        <div className='services-section page-transition'>
            <InnerBanner nextSection={'.services-page-cards'} text={"our <br> <span>services</span>"} icons={["servicesIcon1", "servicesIcon2", "servicesIcon3"]} />

            {isLoading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="services-page-cards" >
                    {
                        services?.map((item: { id: number; title: string; description: string; slug: string; width: string; style: { backgroundColor: string }; }) => (
                            <div key={item?.id} className={`services-page-card custom-width-${item?.width}`} style={{ backgroundColor: item?.style?.backgroundColor, position: "relative" }}>
                                <p>{item?.title}</p>
                                <p>{item?.description}</p>
                                <DefaultButton onClick={() => handleNavigation(item?.slug)} theme='light-bg-btn' text='explore' />
                            </div>
                        ))
                    }
                </div>
            )}

            <Testimonials />
        </div>
    )
}

export default ServicesPage
