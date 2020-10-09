import React from "react";

import "./signin.styles.scss";

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
					<input
						name="email"
						type="email"
						value={email}
						onChange={this.handleChange}
						required
					/>
					<label>Email</label>
					<input
						name="password"
						type="password"
						onChange={this.handleChange}
						value={password}
						required
					/>
					<label>Password</label>
					<input type="submit" value="Submit Form" />
				</form>
			</div>
		);
	}
}

export default Signin;
