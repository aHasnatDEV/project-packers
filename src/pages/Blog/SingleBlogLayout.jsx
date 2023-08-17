import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useTitle } from '../../Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const SingleBlogLayout = () => {
    const singleBlog = useLoaderData();
    useTitle(singleBlog?.blogContent?.title);

    return (
        <>
            <Breadcrumb />
            <div
                className='w-full h-[25rem] lg:h-[40rem] text-white flex justify-center items-center bg-black/50 bg-blend-overlay'
                style={{
                    backgroundImage: `url(${singleBlog?.img})`,
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className='section-div lg:w-3/5'>
                    <h2
                        className='text-3xl lg:text-5xl font-semibold'
                    >
                        {singleBlog?.blogContent?.title}
                    </h2>
                    <div className='text-lg mt-6 flex items-center gap-4'>
                        <div className='flex gap-2 items-center'>
                            <img
                                src={singleBlog?.author?.img}
                                alt="writer image"
                                className='w-10 h-10 rounded-full'
                            />
                            <h4>{singleBlog?.author?.name}</h4>
                        </div>
                        <span className='bg-white w-2 h-2 rounded-full' />
                        <p>{singleBlog?.author?.date}</p>
                    </div>
                </div>
            </div>
            <section
                className='max-w-[50rem] min-h-screen mx-auto px-4 my-12'
                dangerouslySetInnerHTML={{ __html: singleBlog?.blogContent?.body }}
            />
        </>
    );
};

export default SingleBlogLayout;
