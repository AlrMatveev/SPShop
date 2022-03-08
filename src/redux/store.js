import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import reducer from "./reducer";
import history from "../history";

const store = createStore(reducer, applyMiddleware(routerMiddleware(history)));

export default store;
