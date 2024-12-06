"use client"

import { useEffect, useState } from 'react'
import OpeningsCard from './OpeningsCard'
import { Opening } from '../../../Hooks/useFetchData';
import Skeleton from 'react-loading-skeleton';
// import { openings } from '../../../utils/openingsData';
// import { openings } from '@/utils/openingsData'

const OpeningsTabs = ({ openings, isLoading, error }: { openings: Opening[], isLoading: boolean, error: string }) => {

    const categoriesMap: { [key: string]: number } = {};

    openings.forEach((opening: Opening) => {
        categoriesMap[opening.category] = (categoriesMap[opening.category] || 0) + 1;
    });

    const categories = Object.keys(categoriesMap);

    const [selectedTab, setSelectedTab] = useState(categories[0])

    useEffect(() => {
        setSelectedTab(categories[0])
    }, [openings])

    const [bottomLineWidth, setBottomLineWidth] = useState(0);
    const [bottomLineLeft, setBottomLineLeft] = useState(0);

    const handleTabClick = (category: string) => {
        setSelectedTab(category);
    };

    useEffect(() => {
        const activeTab = document.querySelector('.tab-btn.active') as HTMLButtonElement | null;
        if (activeTab) {
            setBottomLineWidth(activeTab.offsetWidth);
            setBottomLineLeft(activeTab.offsetLeft);
        }
    }, [selectedTab]);

    return (
        <div className='openings-tabs-section' >
            <div className="tab-box">
                {categories.map((category, i) => (
                    <button
                        onClick={() => handleTabClick(category)}
                        key={i}
                        className={`tab-btn ${selectedTab === category ? 'active' : ''}`}
                    >
                        {isLoading || error ? (
                            <Skeleton width={200} />
                        ) : (
                            `${category} (${categoriesMap[category]})`
                        )}
                    </button>
                ))}
                <div className="bottom-line" style={{ width: bottomLineWidth + 'px', left: bottomLineLeft + 'px' }}></div>
            </div>
            <div className="content-box">
                <div className="openings-cards-list">
                    {
                        openings.map((item: Opening, i: number) => <OpeningsCard key={i} data={item} selectedTab={selectedTab} isLoading={isLoading} error={error} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default OpeningsTabs