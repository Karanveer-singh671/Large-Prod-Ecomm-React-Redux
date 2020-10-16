import { createStructuredSelector } from "reselect";
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const mapStateToProps = createStructuredSelector({
	// isLoading is available in the prop
	//since passing into WithSpinner need to make sure is named isLoading since passing that name in the WithSpinner as prop
	isLoading: selectIsCollectionFetching,
});

// first WithSpinner wraps CollectionsOverview give us app CollectionsOverview With Spinner and then connect mapStateToProps
// connect makes the props available in CollectionsOverview
// const CollectionsOverviewContainer = connect(mapStateToProps)(
// 	WithSpinner(CollectionsOverview)
// );

// use compose (currying all our functions), equivalent to code above
const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);
export default CollectionsOverviewContainer;
