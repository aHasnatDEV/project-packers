import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import { useTitle } from '../../Hooks/useTitle';
import Breadcrumb from '../../components/Breadcrumb';
import { useLoaderData } from 'react-router-dom';
import useGetMethods from '../../Hooks/useGetMethods';
import { Cart } from '../../components/Cart';

const SingleProductLayout = () => {
    const productData = useLoaderData();
    const { apiData } = useGetMethods(`products?category=${productData?.category}&limit=5`);
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
            <section className='max-w mb-10 flex overflow-x-auto no-scrollbar'>
                {
                    apiData?.docs?.map(info => <div
                        key={info.id}
                        className='w-full h-full'
                    >
                        <Cart
                            id={info.id}
                            img={info.productThumbnail}
                            title={info.productName}
                            price={info.price}
                            cartStyle='h-[25rem] lg:h-full w-[15rem] lg:w-[25rem]'
                        />
                    </div>)
                }
            </section>
        </>
    );
};

export default SingleProductLayout;
