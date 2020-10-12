import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
// need the item in the props since calling item in mapDispatchToProps and it needs that full item to dispatch addItem
const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name"> {name}</span>
				<span className="price"> {price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</CustomButton>
		</div>
	);
};
// need to dispatch action
// can call addItem action function as a prop in component now
const mapDispatchToProps = (dispatch) => ({
	// addItemProp: (whatever want as the payload) need to pass to cart action  => dispatch the action with the function want to call and argument
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
