import React from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { SetCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { SetCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					SetCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				SetCurrentUser(userAuth);
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						// on signup if currentUser set then redirect else display the signin signup
						// user reducer done w mapStateToProps
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}
// user reducer pass in
// now after executes have access to currentUser property inside this.props
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

// dispatch new action trying to pass
const mapDispatchToProps = (dispatch) => ({
	// whatever inside dispatch is the action that want to pass to every reducer
	// the SetCurrentUser is inside the props in the store then can call it with data want so can trigger the action
	SetCurrentUser: (user) => dispatch(SetCurrentUser(user)),
});

// don't need any state from root reducer since doesn't do anything with currentUser in the render
// header needed currentUser so passed in mapStateToProps for that component instead
// and fire a dispatch action so that state is updated and Header can pull the new state from store instead of passing
// as props from app
export default connect(mapStateToProps, mapDispatchToProps)(App);
