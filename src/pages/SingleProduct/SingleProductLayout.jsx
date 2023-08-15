import React, { useEffect, useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import { useTitle } from '../../Hooks/useTitle';
import Breadcrumb from '../../components/Breadcrumb';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleProductLayout = () => {
    const productData = useLoaderData();
    console.log(productData);

    useTitle(productData?.productName || '');

    return (
        <>
            <Breadcrumb />
            <section className='section-div w-full h-full'>
                <div className='w-full lg:h-[70vh] flex flex-col lg:flex-row gap-8'>
                    <aside className='h-full lg:flex-1'>
                        <ProductGallery productData={productData} />
                    </aside>
                    <aside>
                        <ProductInfo productData={productData} />
                    </aside>
                </div>
                <div className='mt-12 grid lg:grid-cols-3'>
                    <div className='lg:col-span-2'>
                        <h3 className='text-2xl font-semibold'>
                            {
                                productData.productName
                            }
                        </h3>
                        <div
                            className='mt-4 text-justify'
                            dangerouslySetInnerHTML={{ __html: productData.description }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProductLayout;
