import React from "react";

import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.jsx";

const SignInAndSignUpPage = () => (
	<SignInAndSignUpContainer>
		<Signin />
		<SignUp />
	</SignInAndSignUpContainer>
);
export default SignInAndSignUpPage;
