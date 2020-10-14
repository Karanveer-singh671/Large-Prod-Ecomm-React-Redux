import UserActionTypes from "./user.types";
// when fire state for first time it will be nothing so need to set the initial state of the reducer similar to class component state when mounts
const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

// state is the state when the action gets fired -> return a new state
// default parameter will be INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				// if error succeed need to clear errors if retry and success sign in
				error: null,
			};
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		// in case does not match the action type keep the state same as what the reducer was
		default:
			return state;
	}
};

export default userReducer;
