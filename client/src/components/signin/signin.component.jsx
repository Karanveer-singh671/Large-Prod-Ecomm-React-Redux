import React from "react";

import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";

class Signin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			alert("check ur email and password");
		}
	};
	handleChange = (e) => {
		const { value, name } = e.target;
		// dynamically set property name so can call in any input tag
		this.setState({ [name]: value });
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2> I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						value={password}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							{" "}
							Sign in with Google{" "}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Signin;
