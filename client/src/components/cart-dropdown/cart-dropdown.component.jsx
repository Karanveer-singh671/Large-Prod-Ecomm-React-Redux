import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ cartItems, history }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
			<CustomButton onClick={() => history.push("/checkout")}>
				Go To Checkout
			</CustomButton>
		</div>
	</div>
);
// check our root reducer for cart and pull cartItems for cartReducer
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
