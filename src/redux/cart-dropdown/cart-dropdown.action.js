import { cartDropdownActionTypes } from "./cart-dropdown.types";

export const toggleCartDropdown = () => ({
    type: cartDropdownActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartDropdownActionTypes.ADD_ITEM,
    payload: item
})

export const reduceItem = (item) => ({
    type: cartDropdownActionTypes.REDUCE_ITEM,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: cartDropdownActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})