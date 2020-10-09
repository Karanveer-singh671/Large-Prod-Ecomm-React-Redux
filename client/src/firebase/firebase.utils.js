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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
