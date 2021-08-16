import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart-dropdown/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>checkout</CustomButton>
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);