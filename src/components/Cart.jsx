import { Link } from 'react-router-dom';
import useGetMethods from '../Hooks/useGetMethods';

/**
 * @param {String} id -takes product id
 * @param {String} img -takes image src
 * @param {String} title -Title of the cart
 * @param {String} cartStyle -style of the cart
 * @param {Number} price -Product price
 * @param {Function} onClickFunction -onClick method for button
 * @returns Cart Component
 */

const Cart = ({
    id = String,
    img = String,
    title = String,
    price = Number,
    onClickFunction = Function,
    cartStyle = String
}) => {
    const { loading } = useGetMethods('products?limit=1')
    console.log('cart: ',loading);
    return <>
        {
            loading ?
                <div
                    className={`p-3 cursor-pointer flex flex-col justify-center group border ${cartStyle && cartStyle}`}
                >
                    <div
                        className='w-full h-96 rounded-xl lazy-loading'
                    />
                    <div className='mt-7'>
                        <h3 className='text-2xl font-semibold w-fit lazy-loading'>
                            <span className='opacity-0'>title</span>
                        </h3>
                        <div className='flex justify-between items-center mt-4 text-base'>
                            <p className='w-fit lazy-loading'>
                                <span className='opacity-0'>Retailer price</span>
                            </p>
                            <p className='font-semibold w-fit lazy-loading'>
                                <span className='opacity-0'>$ price</span>
                            </p>
                        </div>
                    </div>
                </div>
                :
                <Link to={`/product/${id}`}
                    onClick={onClickFunction && onClickFunction}
                    className={`bg-white p-3 cursor-pointer flex flex-col justify-center group border btn ${cartStyle && cartStyle}`}
                >
                    <div className='h-96 rounded-xl overflow-hidden'>
                        <img
                            src={img}
                            alt='Product Image'
                            className='h-full w-full object-cover duration-500 group-hover:scale-105'
                        />
                    </div>
                    <div className='mt-7'>
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        <div className='flex justify-between items-center mt-4 text-base'>
                            <p>Retailer price</p>
                            <p className='font-semibold'>$ {price}</p>
                        </div>
                    </div>
                </Link>
        }
    </>
}

export default Cart;
