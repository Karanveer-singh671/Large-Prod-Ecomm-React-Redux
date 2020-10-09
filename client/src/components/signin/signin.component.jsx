import React from "react";

import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";

class Signin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
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
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle}>
						{" "}
						Sign in with Google{" "}
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default Signin;
