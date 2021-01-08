import { createStore, applyMiddleware } from "redux";
import Candidates from "./reducers";
import thunk from "redux-thunk";
const store = createStore(Candidates, applyMiddleware(thunk));
export default store;
