import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	</div>
);
// check our root reducer for cart and pull cartItems for cartReducer
const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});
export default connect(mapStateToProps)(CartDropDown);
