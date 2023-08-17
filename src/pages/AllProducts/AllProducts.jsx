import React from 'react';
import Cart from '../../components/Cart';

/**
 * All Products Page component
 * @param {Array} productArray all product data array
 * @returns All Products
 */
const AllProducts = ({ productArray = Array }) => {

    return (
        <div className='grid lg:grid-cols-3'>
            {
                productArray?.docs?.map(product => (
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
    );
};

export default AllProducts;
