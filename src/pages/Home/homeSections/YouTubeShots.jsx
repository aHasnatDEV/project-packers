import React, { useEffect, useState } from "react";
import { LazyShots, Shots } from '../../../components/Shots';


/**
 * YouTube Shots
 * @param {Boolean} isHome location home page true / other page false  
 * @returns YouTube Shots Component
 */
const YouTubeShots = ({ isHome = Boolean }) => {
    const value = isHome
    const [slides, setSlides] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('/youtubeLink.json', options)
            .then(response => response.json())
            .then(response => setSlides(response))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    return <section
        className={`max-w flex gap-4 w-full px-5 overflow-scroll no-scrollbar 
            ${isHome && '-mb-24 relative -top-24'}`}
    >
        {
            loading ?
                [...Array(8)].map((arr, i) => <React.Fragment key={i}>
                    <LazyShots />
                </React.Fragment>)
                :
                slides?.map((slide, i) => <React.Fragment key={i}>
                    <Shots videoId={slide.videoId} />
                </React.Fragment>)
        }
    </section>
};

export default YouTubeShots;
