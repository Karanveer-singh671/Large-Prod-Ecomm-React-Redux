import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
	CartDropdownContainer,
	CartDropdownButton,
	EmptyMessageContainer,
	CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropDown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
			)}
			<CartDropdownButton
				onClick={() => {
					history.push("/checkout");
					dispatch(toggleCartHidden());
				}}
			>
				Go To Checkout
			</CartDropdownButton>
		</CartItemsContainer>
	</CartDropdownContainer>
);
// check our root reducer for cart and pull cartItems for cartReducer
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
