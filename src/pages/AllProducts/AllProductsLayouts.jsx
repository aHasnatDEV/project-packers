import { useEffect, useState } from "react";
import { useTitle } from "../../Hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb";
import AllProducts from "./AllProducts";
import LeftNav from "./LeftNav";
import multimedia from '../../assets/icon/multimedia.png';
import Pagination from "../../components/Pagination";



const AllProductsLayout = () => {
    useTitle('All Products');
    const [productArray, setPresentArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 12;
    console.log('Current Page Number:', page);
    const pageLimit = Math.ceil(productArray.totalDocs / limit);
    useEffect(() => {
        setLoading(true);
        const options = {
            method: 'GET',
            withCredentials: true
        };
        fetch(`${import.meta.env.VITE_BASE_URL}/products?page=${page}&limit=${limit}`, options)
            .then(response => response.json())
            .then(response => {
                setPresentArray(response);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(true);
            });
    }, [page]);

    return (
        <>
            <Breadcrumb />
            <section className="section-div w-full flex flex-col lg:flex-row lg:justify-between lg:gap-6">
                <aside className='w-full lg:w-[20%]'>
                    <LeftNav />
                </aside>
                <aside className='w-full lg:w-[80%]'>
                    {
                        loading ? <div className='w-full h-full flex justify-center items-center'>
                            <div>
                                <img
                                    src={multimedia}
                                    className='w-20 animate-spin'
                                />
                            </div>
                        </div> : <>
                            <AllProducts productArray={productArray} />
                            <div className='w-full mt-8 flex justify-center items-center gap-2'>
                                <Pagination
                                    page={page}
                                    setPage={setPage}
                                    pageLimit={pageLimit}
                                />
                            </div>
                        </>
                    }
                </aside>
            </section>
        </>
    );
};

export default AllProductsLayout;
