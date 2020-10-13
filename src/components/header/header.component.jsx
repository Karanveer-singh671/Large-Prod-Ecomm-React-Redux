import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink className="option" to="/shop">
				Shop
			</OptionLink>
			{currentUser ? (
				<OptionLink as="div" className="option" onClick={() => auth.signOut()}>
					Sign Out
				</OptionLink>
			) : (
				<OptionLink to="/signin">Sign In</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropDown />}
	</HeaderContainer>
);
// this is the root reducer (state), have key of user in root reducer which gets us user reducer and user reducer has currentUser property
// destructure nested values from state so first is saying get the user from state and the user nested value of currentUser
// user and cart are both keys of the root reducer and then since going to individual reducer can get nested value

// createStructured selector point properties to selector want and it will take top level state(root reducer state) and send to each selector
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

// pass root reducer to connect
export default connect(mapStateToProps)(Header);
