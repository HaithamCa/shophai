import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart-dropdown/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartDropdown } from '../../redux/cart-dropdown/cart-dropdown.action';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                    <div className="empty-cart-message">Your Cart Is Empty</div>
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartDropdown());
            }}>checkout</CustomButton>
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));