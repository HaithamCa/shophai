import { createSelector } from 'reselect';

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartIconCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity, 0
    )
)

export const selectCartTotalCheckout = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity * cartItem.price, 0
    )
)

//================This code below work and make the same result
// const selelctCartItems = state => state.cart.cartItems;

// export const selectCartIconCount = createSelector(
//     [selelctCartItems],
//     cartItems => cartItems.reduce(
//         (accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity, 0
//     )
// )