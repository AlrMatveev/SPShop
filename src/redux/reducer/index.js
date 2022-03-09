import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import brands from "./brands";
import products from "./products";
import order from "./order";

import history from "../../history";

export default combineReducers({
  router: connectRouter(history),
  brands,
  products,
  order,
});
