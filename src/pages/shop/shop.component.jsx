import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

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
		const { match, isCollectionFetching, isCollectionLoaded } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
