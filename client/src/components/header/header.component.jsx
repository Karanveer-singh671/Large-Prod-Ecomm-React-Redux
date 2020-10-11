import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				Contact
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					Sign Out
				</div>
			) : (
				<Link className="option" to="/signin">
					Sign In
				</Link>
			)}
			<CartIcon />
		</div>
	</div>
);
// this is the root reducer (state), have key of user in root reducer which gets us user reducer and user reducer has currentUser property
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

// pass root reducer to connect
export default connect(mapStateToProps)(Header);
