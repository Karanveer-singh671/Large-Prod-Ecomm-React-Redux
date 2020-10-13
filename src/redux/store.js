import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// all browser to cache results using localStorage under the hood
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

// create react app sets NODE_ENV and we can check if its development then we can see the redux logger else if prod we can't!
if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// persisted version of store
export const persistor = persistStore(store);
export default { store, persistor };
