import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => (
	<div className="collection-page">
		<h2>Collection Page</h2>
	</div>
);
// ownProps includes all props in our component that is connected using connect gives access to match, history etc
const mapStateToProps = (state, ownProps) => ({
	// this needs the state since selectCollection needs a part of the state depending on the URL parameter (takes in collectionUrlParam as a paramter so need to pass state)
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
