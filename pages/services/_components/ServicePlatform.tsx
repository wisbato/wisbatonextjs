// import { servicePlatformData } from "../../../utils/servicesData"

const ServicePlatform = ({ servicePlatform }: { servicePlatform: { id: number; title: string; icon: string; }[] }) => {
    console.log("servicePlatform: ", servicePlatform)

    return (
        <div className="service-platforms">
            {
                servicePlatform?.map((item, i) => <div key={i} className='service-platform' >
                    {/* <div dangerouslySetInnerHTML={{ __html: item.icon }} /> */}
                    <div>
                        <img src={item.icon} alt="" />
                    </div>
                    <p>{item.title}</p>
                </div>)
            }
        </div>
    )
}

export default ServicePlatform
