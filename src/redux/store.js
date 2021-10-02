import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk";
import authreducer from "./reducers/AuthReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(authreducer, composeEnhancers(applyMiddleware(thunk)));

export default store;