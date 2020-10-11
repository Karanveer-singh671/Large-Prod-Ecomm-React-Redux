import CartActionTypes from "./cart.types";
const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				// instead of passing a payload can just toggle boolean value
				hidden: !state.hidden,
			};
			case CartActionTypes.ADD_ITEM:
				return {
					...state,
					// old cartItems from previous state of reducer + actions
					cartItems: [...state.cartItems,  action.payload]
				}
		default:
			return state;
	}
};

export default cartReducer;
