import React, { useEffect, useState } from 'react';

/**
 * @param {Object} productData single product object
 * @returns product gallery
 */
const ProductGallery = ({ productData = Object }) => {
    const [presentImage, setPresentImage] = useState('');
    useEffect(()=>setPresentImage(productData?.productThumbnail),[productData]);

    const imgSrc = productData?.productImages;

    const imgFn = (imgSrc, key) => <img
        key={key}
        onClick={() => setPresentImage(imgSrc)}
        className='border rounded-xl cursor-pointer duration-200 active:scale-75 w-full object-cover'
        src={imgSrc} alt="product image"
    />;

    return (
        <div className='w-full h-[50vh] lg:h-full flex gap-4'>
            <aside className='w-1/4 h-full flex flex-col gap-4 overflow-auto no-scrollbar'>
                {
                    imgSrc?.map((src, i) => imgFn(src, i))
                }
            </aside>
            <aside className='w-full h-full flex-1'>
                <img
                    className='h-full w-full border rounded-xl'
                    src={presentImage} alt="product image"
                />
            </aside>
        </div>
    );
};

export default ProductGallery;
