import { createSelector } from "reselect";

// takes whole reducer state and gives back slice
const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
	[selectCart],
	// function that used to return what we want from selector state.cart so this will take in cart
	// if have selectUser = (state) => state.user then just use user as input
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
