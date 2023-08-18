import {  useState } from "react";
import { useTitle } from "../../Hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb";
import LeftNav from "./LeftNav";
import Pagination from "../../components/Pagination";
import useGetMethods from "../../Hooks/useGetMethods";
import { Cart, LazyCart } from "../../components/Cart";


const AllProductsLayout = () => {
    useTitle('All Products');
    const [page, setPage] = useState(1);
    const { apiData, loading } = useGetMethods(`products?page=${page}&limit=12`, page);

    return (
        <>
            <Breadcrumb />
            <section className="section-div w-full flex flex-col lg:flex-row lg:justify-between lg:gap-6">
                <aside className='w-full lg:w-[20%]'>
                    <LeftNav />
                </aside>
                <aside className='w-full lg:w-[80%] mt-6 lg:mt-0'>
                    <div className='grid lg:grid-cols-3'>
                        {
                            loading ?
                                [...Array(12)].map((array, i) => <LazyCart key={i} />)
                                :
                                apiData?.docs?.map(product => (
                                    <Cart
                                        key={product.id}
                                        id={product.id}
                                        img={product.productThumbnail}
                                        title={product.productName}
                                        price={product.price}
                                    />
                                ))
                        }
                    </div>
                    {
                        loading || <div className='w-full mt-8 flex justify-center items-center gap-2'>
                            <Pagination
                                page={page}
                                setPage={setPage}
                                pageLimit={apiData?.totalDocs}
                            />
                        </div>
                    }
                </aside>
            </section>
        </>
    );
};

export default AllProductsLayout;
