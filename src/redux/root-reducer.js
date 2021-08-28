import { combineReducers } from "redux";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; /* The place of storage you want to store the values */

import cartReducer from "./cart-dropdown/cart-dropdown.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key: 'root',    /* When you want to start to store here we start with the root */
    storage, /* here the place you want to store like now we store into local storage not session storage */
    whitelist: ['cart'] /* the reducer we want to deal with */
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);


