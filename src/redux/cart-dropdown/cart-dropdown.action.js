import { cartDropdownActionTypes } from "./cart-dropdown.types";

export const toggleCartDropdown = () => ({
    type: cartDropdownActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartDropdownActionTypes.ADD_ITEM,
    payload: item
})