import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
	// payload is optional property and since not using don't add
});

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});


