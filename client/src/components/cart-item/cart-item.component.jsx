import React from "react";

import {
	CartItemContainer,
	ItemDetailsContainer,
	CartItemImage,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<CartItemImage src={imageUrl} alt="item" />
		<ItemDetailsContainer>
			<span>{name}</span>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetailsContainer>
	</CartItemContainer>
);
// add react.memo since each item in the dropdown is re-rendered when adding a completely separate item
export default React.memo(CartItem);
