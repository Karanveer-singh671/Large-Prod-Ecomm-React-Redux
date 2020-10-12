import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_j4FVORmnyI2bG6DlBqeqcnAC";
	const onToken = (token) => alert("Payment Successful");
	return (
		<StripeCheckout
			label="Pay Now"
			name="E-commerce Merchandise"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};
export default StripeCheckoutButton;
