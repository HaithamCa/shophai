import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalCheckout } from '../../redux/cart-dropdown/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, totalCheckout }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="checkout-header-blocks">
                <span>Product</span>
            </div>
            <div className="checkout-header-blocks">
                <span>Description</span>
            </div>
            <div className="checkout-header-blocks">
                <span>Quantity</span>
            </div>
            <div className="checkout-header-blocks">
                <span>Price</span>
            </div>
            <div className="checkout-header-blocks">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <span className="total">${totalCheckout}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCheckout: selectCartTotalCheckout
})

export default connect(mapStateToProps)(CheckoutPage);