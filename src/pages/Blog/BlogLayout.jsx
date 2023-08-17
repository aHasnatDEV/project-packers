import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useTitle } from '../../Hooks/useTitle';
import BlogCart from './BlogCart';
import useGetMethods from '../../Hooks/useGetMethods';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';

const BlogLayout = () => {
    useTitle('Blog');
    const [page, setPage] = useState(1);
    const { apiData, loading } = useGetMethods(`blog?page=${page}&limit=20`, page);

    return (
        <>
            <Breadcrumb />
            <section
                className={`section-div min-h-[50vh] ${loading ? 'flex items-center justify-center' : 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'}`}
            >
                {
                    loading ? <Spinner /> :
                        apiData?.docs?.map((blog) => <React.Fragment key={blog.id}>
                            <BlogCart
                                id={blog.id}
                                imgSrc={blog?.img}
                                title={blog?.title}
                                paragraph={blog?.summary}
                            />
                        </React.Fragment>)
                }
            </section>
            <div className='max-w mb-10 '>
                <Pagination
                    page={page}
                    setPage={setPage}
                    pageLimit={apiData?.totalPages}
                />
            </div>
        </>
    );
};

export default BlogLayout;
