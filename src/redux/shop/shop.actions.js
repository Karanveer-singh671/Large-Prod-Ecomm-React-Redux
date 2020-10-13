import ShopActionTypes from "./shop.types";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";

export const fetchCollectionsStart = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection("collections");
		//now that fetchCollectionStart is called will change isFetching to true
		dispatch(fetchCollectionsStart());
		// then can start getting snapshot
		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				// dispatch fetchCollectionsSuccess here since was able to get collectionsMap now
				dispatch(fetchCollectionsSuccess(collectionsMap));
				// since async function call .catch for failure
			})
			.catch((error) => {
				// dispatch fetchCollectionsFailure and will set isFetching to false and pass payload
				dispatch(fetchCollectionsFailure(error.message));
			});
	};
};
