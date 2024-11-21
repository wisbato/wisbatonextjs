import './Home.css';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { WorkData } from '../../Hooks/useFetchData';
import { useRouter } from 'next/navigation';

const WorksCard = ({ data, key }: { data: WorkData; key: number }) => {
    const animateRef = useScrollAnimation();
    const router = useRouter()

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();

        router.push(`/works/${data}`)
        window.scrollTo(0, 0)
    };

    return (
        <div className="works-card visible-section" key={key} ref={animateRef} onClick={() => handleNavigation(data.slug)}>
            <div className='works-card-img'>
                <img
                    src={data?.image} className='work-img' alt="wisbato works card"
                    style={{ borderRadius: "4px", transition: "transform 0.3s ease" }}
                    width={"100%"}
                    height={"auto"}
                />
            </div>
            <div className='works-title' >
                <h1>{data.name} <span> - {data.title}</span> </h1>
            </div>
        </div>
    );
};

export default WorksCard;