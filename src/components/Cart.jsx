import { Link } from "react-router-dom";

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
    return <Link to={`/product/${id}`}
        onClick={onClickFunction}
        className={`bg-white p-3 cursor-pointer flex flex-col justify-center group ${cartStyle && cartStyle}`}
    >
        <div className="h-96 rounded-xl overflow-hidden">
            <img
                src={img}
                alt="Product Image"
                className='h-full w-full object-cover duration-700 group-hover:scale-150'
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

export default Cart;
