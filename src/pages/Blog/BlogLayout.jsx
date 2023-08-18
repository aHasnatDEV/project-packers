import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useTitle } from '../../Hooks/useTitle';
import useGetMethods from '../../Hooks/useGetMethods';
import Pagination from '../../components/Pagination';
import { BlogCart, LazyBlogCart } from './BlogCart';

const BlogLayout = () => {
    useTitle('Blog');
    const [page, setPage] = useState(1);
    const { apiData, loading } = useGetMethods(`blog?page=${page}&limit=20`, page);

    return (
        <>
            <Breadcrumb />
            <section
                className={`section-div w-full min-h-[50vh] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7`}
            >
                {
                    !loading ?
                        apiData?.docs?.map(blog =>
                            <BlogCart
                                key={blog.id}
                                id={blog.id}
                                imgSrc={blog?.img}
                                title={blog?.title}
                                paragraph={blog?.summary}
                            />)
                        :
                        [...Array(20)].map((array, i) => <LazyBlogCart key={i} />)
                }
            </section>
            <div className='max-w mb-10 '>
                {
                    !loading && <Pagination
                        page={page}
                        setPage={setPage}
                        pageLimit={apiData?.totalPages}
                    />
                }
            </div>
        </>
    );
};

export default BlogLayout;
