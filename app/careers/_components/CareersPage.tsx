"use client"

import InnerBanner from "@/components/InnerBanner/InnerBanner";
import SectionTitle from "@/components/SectionTitle";
import { useFetchCareers } from "@/Hooks/useFetchData";
import OpeningsTabs from "./OpeningsTabs";
import OpeningsEyeExpand from "./OpeningsEyeExpand";

const CareersPage = () => {
    const { careers, isLoading, error } = useFetchCareers();
    return (
        <div className='careers-section page-transition' >
            <InnerBanner nextSection={'.openings-section'} text={'join our <br> <span>team</span>'} icons={["careersIcon1", "careersIcon2", "careersIcon3"]} />
            <div className="openings-section">
                <SectionTitle title='current openings' />

                {/* BIG SCREEN  */}
                <OpeningsTabs openings={careers} isLoading={isLoading} error={error} />

                {/* SMALL SCREEN  */}
                <OpeningsEyeExpand openings={careers} isLoading={isLoading} error={error} />
            </div>
        </div>
    )
}

export default CareersPage
