import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart-dropdown/cart-dropdown.action';
import { selectCartIconCount } from '../../redux/cart-dropdown/cart.selector';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-counter'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartIconCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);