"use client"

import DefaultPhoneInput from '../../../components/InputFields/DefaultPhoneInput';
import ScrollButton from '../../../components/ScrollButton';
import DefaultTextArea from '../../../components/InputFields/DefaultTextArea';
import SectionTitle from '../../../components/SectionTitle';
import DefaultInput from '../../../components/InputFields/DefaultInput';
import EyeExpand from '../../../components/EyeExpand/EyeExpand';
import RoutesMap from '../../../components/RoutesMap/BreadCrumb';
import { useContext, useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { StatusContext } from "../../../Hooks/StatusContext";
import { useFormState } from "../../../Hooks/useFormState";
import ServicesDropDown from "../../../components/InputFields/ServicesDropDown";
import { Service, useFetchService, useFetchWorks } from "../../../Hooks/useFetchData";
import WorksCard from "../../../components/Home/WorksCard";
import OutComes from "../_components/OutComes";
import TeamCateCard from "../../team/_components/TeamCateCard";
import { useParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import ToastMessage from '@/components/ToastMessage';

const ServiceDetailed = () => {
    const [expandedId, setExpandedId] = useState<null | number>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const params = useParams();
    const careersIdValue = params?.serviceId || "";
    const [service, setData] = useState<Service | undefined>();

    function transformSlug(slug: string) {
        if (!slug) return '';
        return slug
            .split('-')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .toUpperCase();
    }

    const { service: servicesData, isLoading: servicesLoading, error: servicesError } = useFetchService();
    const { works, isLoading: worksLoading } = useFetchWorks({});
    const { statusMessage, handleServiceSelection, firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, message, setMessage, handleSubmit, loading } = useFormState();
    const { setNotify } = useContext(StatusContext);

    useEffect(() => {
        if (servicesData && careersIdValue) {
            const foundService = servicesData.find((item: { slug: string }) => item?.slug === careersIdValue);
            setData(foundService as Service);
        }
    }, [careersIdValue, servicesData]);

    useEffect(() => {
        if (statusMessage.message) {
            setNotify(statusMessage);
            if (!statusMessage.message) {
                setTimeout(() => {
                    setNotify(statusMessage);
                }, 3000);
            }
        }
    }, [statusMessage, setNotify]);

    // Loading and error states
    if (servicesLoading || worksLoading) {
        return (
            <div className="services-detailed-section">
                <div className="services-detailed-banner">
                    <Skeleton height={300} />
                </div>
                <div className="work-section">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="works-card">
                            <Skeleton height={200} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (servicesError) {
        return <div className="error-message">Error loading service data</div>;
    }

    if (!service) {
        return <div className="error-message">Service not found</div>;
    }

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

   const filteredWorks = (works ?? []).filter(work => 
    work.servicesProvides.some(serviceProv => 
        serviceProv.toUpperCase().includes(transformSlug(service?.title || ""))
    )
);

    return (
        <div className='services-detailed-section page-transition'>
            <Head>
                <title>{service?.metaTitle || 'Service Details'}</title>
                <meta name="description" content={service?.metaDescription || ''} />
                <link rel="canonical" href={`https://www.wisbato.com/services/${service?.slug}`} />
            </Head>

            <div className="services-detailed-banner">
                <div className="services-detailed-text-div">
                    <RoutesMap isLoading={servicesLoading} title={careersIdValue} />
                    <p className='services-detailed-text' dangerouslySetInnerHTML={{ __html: service?.context?.mainTitle || "" }}></p>
                </div>
                <div style={{ marginTop: "50px" }}>
                    <ScrollButton hide={true} color='#000' nextSection='.services-detailed-content-div' />
                </div>
            </div>

            <div className='work-section'>
                {filteredWorks.length > 0 && (
                    <>
                        <SectionTitle title='works' />
                        <div className="works-card-list">
                            {filteredWorks.slice(0, 4).map((work, index) => (
                                <WorksCard key={index} data={work} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="services-detailed-content-div">
                <div className="services-detailed-content-texts">
                    <p>{service?.context?.subTitle}</p>
                    <p dangerouslySetInnerHTML={{ __html: service?.context?.content || "" }} />
                </div>
                <svg width="286" height="285" viewBox="0 0 286 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG content remains the same */}
                </svg>
            </div>

            {service?.workingProcess && (
                <div className="service-working-process-section">
                    <SectionTitle title='working process' />
                    <div className='testimonials-qoutes-di'>
                        <div className='testimonials-carouse' style={{ position: "relative" }}>
                            <div className="testimonials-carousel-inne" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                                {service.workingProcess.map((item, i) => (
                                    <div className="working-process-card" key={i}>
                                        <div className='working-process-titles' style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                            <p className='working-process-title'>{item.title}</p>
                                            <p className='working-process-count'>0{i + 1}/0{service.workingProcess.length}</p>
                                        </div>
                                        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                            <div className="card-bottom-div">
                                                <div className='card-sub-data-list'>
                                                    {item?.list?.map((itm) => (
                                                        <EyeExpand key={itm?.id} data={itm} isOpen={expandedId} toggleExpand={toggleExpand} />
                                                    ))}
                                                </div>
                                                {item.image && (
                                                    <Image
                                                        width={800}
                                                        height={100}
                                                        src={item.image}
                                                        alt={item.alt || ''}
                                                        className='testimonials-text-img'
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="scroll-btns">
                                {service.workingProcess.map((_, i) => (
                                    <div 
                                        onClick={() => setActiveIndex(i)} 
                                        key={i} 
                                        style={{ 
                                            width: activeIndex === i ? "100px" : "10px", 
                                            borderRadius: activeIndex === i ? "4px" : "10px" 
                                        }} 
                                        className="scroll-btn"
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {service?.outcomes && <div className='outcomes-section'> <OutComes outComes={service.outcomes} /> </div> }

            {service?.title && <TeamCateCard service={service.title} />}

            {service?.FAQData && (
                <div className="services-faq-section">
                    <SectionTitle title='faq' />
                    {service.FAQData.map((item) => (
                        <EyeExpand key={item?.id} data={item} isOpen={expandedId} toggleExpand={toggleExpand} />
                    ))}
                </div>
            )}

            <div className="service-contact-section">
                <SectionTitle title='get in touch' />
                <div className="contact-form-section">
                    <p>Let&apos;s Boost Your Digital Presence!</p>
                    <div className="contact-form-div">
                        <svg className='contact-form-icon' width="291" height="300" viewBox="0 0 291 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* SVG content remains the same */}
                        </svg>
                        <div className="contact-form">
                            <span>
                                <DefaultInput onChange={setFirstName} value={firstName} labelName='first name*' placeHolder='John' />
                                <DefaultInput onChange={setLastName} value={lastName} labelName='second name' placeHolder='Smith' />
                            </span>
                            <span>
                                <DefaultInput onChange={setEmail} value={email} labelName='email*' placeHolder='johnsmith@example.com' />
                                <DefaultPhoneInput value={phone} onChange={(phoneValue) => setPhone(phoneValue || "")} />
                            </span>
                            <span>
                                <ServicesDropDown onServiceSelected={handleServiceSelection} />
                            </span>
                            <span>
                                <DefaultTextArea onChange={setMessage} value={message} labelName='share more' placeHolder='Share your thoughts' />
                            </span>
                            {loading ? 
                                <button>Submitting...</button> : 
                                <button onClick={handleSubmit}>submit</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ToastMessage message={statusMessage.message} />
        </div>
    )
}

export default ServiceDetailed