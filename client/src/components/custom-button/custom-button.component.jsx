import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  // this way will pass all the properties from parent component where call CustomButton into button tag
  // children will be whatever put between opening and closing tag from where this component is called
	<button className="custom-button" {...otherProps}>
    
		{children}
	</button>
);

export default CustomButton;
