import React from "react";

import "./sign-in-and-sign-up.jsx";
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInAndSignUpPage = () => (
	<div className="sign-in-and-sign-up">
		<Signin />
		<SignUp />
	</div>
);
export default SignInAndSignUpPage;
