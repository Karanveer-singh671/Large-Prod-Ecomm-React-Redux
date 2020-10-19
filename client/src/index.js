import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// curly brace (exporting more than 1 var)
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// wrap app in PersistGate so it has access to Persist flow  also rehydrate state with what had before refresh when app refreshes
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.register();
