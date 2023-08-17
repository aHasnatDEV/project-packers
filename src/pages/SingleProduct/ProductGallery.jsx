import React, { useEffect, useState } from 'react';

/**
 * @param {Object} productData single product object
 * @returns product gallery
 */
const ProductGallery = ({ productData = Object }) => {
    const [presentImage, setPresentImage] = useState('');
    useEffect(() => setPresentImage(productData?.productThumbnail), [productData]);
    const imgSrc = productData?.productImages;

    return (
        <div className='w-full h-[50vh] lg:h-full flex gap-4'>
            <aside className='w-1/4 rounded-xl  h-full flex flex-col gap-4 overflow-auto no-scrollbar'>
                {
                    imgSrc?.map((src, i) => <img
                        key={i}
                        onClick={() => setPresentImage(src)}
                        className='cursor-pointer duration-200 active:scale-95 w-full object-cover'
                        src={src} alt="product image"
                    />)
                }
            </aside>
            <aside className='w-full h-full border rounded-xl flex-1 overflow-hidden'>
                <img
                    className='h-full w-full  duration-500 hover:scale-105'
                    src={presentImage} alt="product image"
                />
            </aside>
        </div>
    );
};

export default ProductGallery;
