// combines all our states together from individual reducers
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import shopReducer from "./shop/shop.reducer";
// local storage object
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
// config want redux persist to use
const persistConfig = {
	// where want to start storing everything
	key: "root",
	storage,
	// any reducers we want to store / persist (user handled by fire base so don't need)
	whitelist: ["cart"],
};
// use this function to create root reducer object

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
