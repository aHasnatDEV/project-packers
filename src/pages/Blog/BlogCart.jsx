import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Blog Cart component
 * @param {String} id blog id 
 * @param {String} imgSrc blog image 
 * @param {String} title blog title 
 * @param {String} paragraph blog paragraph 
 * @returns Blog Cart
 */
const BlogCart = ({ id = String, imgSrc = String, title = String, paragraph = String }) => {
    return (
        <div className='rounded-lg overflow-hidden border duration-300 hover:shadow-xl'>
            <img src={imgSrc} alt="blog image" className='w-full h-52' />
            <div className='p-5 flex flex-col gap-2'>
                <h3 className='font-semibold'>{title}</h3>
                <p className='text-justify text-sm'>{paragraph}</p>
                <Link
                    to={`/blog/${id}`}
                    className='w-1/2 text-center mt-2 px-4 py-2 border rounded-lg duration-200 active:scale-90 hover:shadow-lg active:shadow-sm'
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default BlogCart;
