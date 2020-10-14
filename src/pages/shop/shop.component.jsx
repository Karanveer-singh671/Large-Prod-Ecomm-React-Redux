import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../../pages/collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		// component mounts so perform the async request here and redux-thunk allowing redux to handle the async event
		fetchCollectionsStartAsync();
	}
	// isLoading will be the inverted value of isCollectionLoaded for CollectionPageWithSpinner.
	// If Collection is Loaded then isLoading is false path so need to add a bang in selector
	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
