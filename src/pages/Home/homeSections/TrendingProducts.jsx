import { Cart } from "../../../components/Cart";
import { Link } from "react-router-dom";
import useGetMethods from "../../../Hooks/useGetMethods";


const TrendingProducts = () => {
    const { apiData, loading } = useGetMethods('products?limit=8');

    return <section className="section-div">
        <h1 className="text-4xl text-center font-semibold">Trending products on  Project Packers</h1>
        <p className="mt-4 text-center text-lg text-gray-400">Get inspired by what people in your city are buying from abroad with<br /> the biggest savings</p>
        <div className="mt-12 grid lg:grid-cols-4">
            {
                apiData?.docs?.map(product => {
                    return <Cart
                        key={product.id}
                        id={product.id}
                        img={product.productThumbnail}
                        title={product.productName}
                        price={product.price}
                        loading={loading}
                    />
                })
            }
        </div>
        <Link to='/products'>
            <button className=" mx-auto mt-8 btn-primary p-4 flex justify-center items-center gap-4">
                View More Items
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 10H3.33325" stroke="#124E58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.5 5.8335L16.0774 9.41091C16.3552 9.68866 16.4941 9.82758 16.4941 10.0002C16.4941 10.1727 16.3552 10.3117 16.0774 10.5894L12.5 14.1668" stroke="#124E58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
        </Link>
    </section>
}

export default TrendingProducts;
