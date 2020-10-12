import { createSelector } from "reselect";
// check root reducer then go to userState using userReducer 
const selectUser = state => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  // function takes in the result of the selectUser provided above so user Reducer
  (user) => user.currentUser
)
