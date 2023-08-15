import React from 'react';
import Cart from '../../components/Cart';

const AllProducts = ({ productArray = Array }) => {

    return (
        <div className='bg-slate-200 py-[1px] grid lg:grid-cols-3 gap-[1px]'>
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
