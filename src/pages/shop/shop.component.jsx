import React from "react";
// default export (no brace)
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	unsubscribeFromSnapshot = null;
	componentDidMount() {
		const collectionRef = firestore.collection("collections");
		// on update collectionRef will send snapshot
		collectionRef.onSnapshot(async (snapshot) => {
			convertCollectionsSnapshotToMap(snapshot);
		});
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

export default ShopPage;
