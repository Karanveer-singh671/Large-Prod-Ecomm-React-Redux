export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		// check if cartItem adding is equal to cartItem already present in array then stop
		(cartItem) => cartItem.id === cartItemToAdd.id
	);
	// if item added is equal to item already in cart then create a new array to re-render component
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	// quantity is attached as 1 first time on return (won't access if block first time since first time adding an item in)
	// every time after trying to increase quantity and exists can reference current quantity of 1
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
