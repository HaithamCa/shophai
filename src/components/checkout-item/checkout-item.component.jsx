import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { addItem, removeItemFromCart, reduceItem } from '../../redux/cart-dropdown/cart-dropdown.action';

const CheckoutItem = ({ cartItem, removeItemFromCart, addItem, reduceItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(reduceItem(item))
})



export default connect(null, mapDispatchToProps)(CheckoutItem);