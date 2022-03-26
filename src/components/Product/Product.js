import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({product, handleAddToCart}) => {
    // const Product = (props) => {
    // console.log(props.product)
    const {img,price, name,seller,ratings} = product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>price:${price}</p>
                <p className='product-manufacturer'>Manufacturer:{seller}</p>
                <p className='product-manufacturer'>Rating:{ratings}</p>
            </div>
            <div>
                <button onClick={()=>handleAddToCart(product)} className='cart-btn'>
                    <p>Add to Cart
                    <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon>
                     </p></button>
            </div> 
        </div>
    );
};

export default Product;