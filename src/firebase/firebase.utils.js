import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
	apiKey: "AIzaSyASiiEHmY9aRyrcEBYwfe3RSf19D71fd-4",
	authDomain: "e-commerce-react-redux.firebaseapp.com",
	databaseURL: "https://e-commerce-react-redux.firebaseio.com",
	projectId: "e-commerce-react-redux",
	storageBucket: "e-commerce-react-redux.appspot.com",
	messagingSenderId: "509034361563",
	appId: "1:509034361563:web:aaf3f107c0e07f0c32d2fe",
	measurementId: "G-CC5Z50NX5P",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error creating user", err.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);
export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
