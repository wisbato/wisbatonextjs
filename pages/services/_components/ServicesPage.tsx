"use client"

import { useRouter } from "next/navigation";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import DefaultButton from "@/components/DefaultButton";
import Testimonials from "@/components/Testimonials/Testimonials";
import { useLenis } from "@/Hooks/useLenis";
import { useFetchService } from "@/Hooks/useFetchData";
import Skeleton from "react-loading-skeleton";

const ServicesPage = () => {
    useLenis();

    const router = useRouter()

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();
        router.push(`/services/${data}`);
        window.scrollTo(0, 0);
    };

    const { service, isLoading: serviceLoading, error } = useFetchService();

    return (
        <div className='services-section page-transition'>
            <InnerBanner nextSection={'.services-page-cards'} text={"our <br> <span>services</span>"} icons={["servicesIcon1", "servicesIcon2", "servicesIcon3"]} />

            {serviceLoading || error ? (
                <div className="services-page-cards" >
                    {
                        Array.from({ length: 6 })?.map((_, i) => (
                            <div key={i} className={`services-page-card`} style={{ backgroundColor: "transparent", position: "relative" }}>
                                <p><Skeleton /></p>
                                <p><Skeleton count={3} /></p>
                                <Skeleton />
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className="services-page-cards" >
                    {
                        service?.map((item: { id: number; title: string; description: string; slug: string; width: string; style: { backgroundColor: string }; }) => (
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
