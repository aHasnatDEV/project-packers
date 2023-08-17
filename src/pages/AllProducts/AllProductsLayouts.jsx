import { useEffect, useState } from "react";
import { useTitle } from "../../Hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb";
import AllProducts from "./AllProducts";
import LeftNav from "./LeftNav";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import useGetMethods from "../../Hooks/useGetMethods";


const AllProductsLayout = () => {
    useTitle('All Products');
    const [page, setPage] = useState(1);
    const { apiData, loading } = useGetMethods(`products?page=${page}&limit=12`, page);
    console.log('from hook', loading);

    return (
        <>
            <Breadcrumb />
            <section className="section-div w-full flex flex-col lg:flex-row lg:justify-between lg:gap-6">
                <aside className='w-full lg:w-[20%]'>
                    <LeftNav />
                </aside>
                <aside className='w-full lg:w-[80%]'>
                    <AllProducts productArray={apiData} />
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
