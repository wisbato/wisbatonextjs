import DefaultButton from '../DefaultButton'
// import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import "./Home.css"
import { redirect } from 'next/navigation';
import Image from 'next/image';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

type ServicesCardProps = { key: number; data: { title: string; description: string; image: string; id: number; slug: string; }; }

const ServicesCard = ({ data }: ServicesCardProps) => {
    const animateRef = useScrollAnimation();
    // const navigate = useNavigate();

    const colors = ['#f7d2db', '#ffdd78', '#c3dfff', '#dcd2f7'];
    const color = colors[data.id % colors.length];

    const isReverse = data.id % 2 !== 0;
    const flexDirectionClass = isReverse ? 'reverse' : 'normal';

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]/gi, "-").toLowerCase();
        // navigate(`/services/${data}`);
        window.scrollTo(0, 0);
        redirect(`/services/${data}`);
    };

    return (
        <div ref={animateRef} className={`services-card ${flexDirectionClass}`} style={{ backgroundColor: color }}>
            <div className="home-services-content">
                <h2 className='home-services-content-title' >{data.title}</h2>
                <p>{data.description}</p>
                <div>
                    <DefaultButton onClick={() => handleNavigation(data.slug)} theme='light-bg-btn' text='learn more' />
                </div>
            </div>
            <div className="home-services-img">
                <Image width={100} height={100} src={`${data?.image}.webp`} alt="Your image alt text" className='services-img' />
                {/* <img src={`${data?.image}.webp`} alt="Your image alt text" className='services-img' /> */}
            </div>
        </div >
    )
}

export default ServicesCard;