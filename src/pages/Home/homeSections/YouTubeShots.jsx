import Shots from "../../../components/Shots";

const YouTubeShots = ({ isHome = Boolean }) => {
    const value = isHome

    const slides = [
        {
            videoId: 'dqeklvD30EA'
        },
        {
            videoId: 'gcJe6Hhwiaw'
        },
        {
            videoId: 'CKySIlyliMg'
        },
        {
            videoId: 'V9Z7_6HCPsA'
        },
        {
            videoId: '3h5V8LN0lTc'
        },
        {
            videoId: 'ziAotzUqn1c'
        },
        {
            videoId: 'sd3LWOJQg28'
        }
    ];

    return <section
        className={`max-w flex gap-4 w-full px-5 overflow-scroll no-scrollbar 
            ${isHome && '-mb-24 relative -top-24'}`}
    >
        {
            slides.map((slide, i) => <Shots key={i} videoId={slide.videoId} />)
        }
    </section>
};

export default YouTubeShots;
