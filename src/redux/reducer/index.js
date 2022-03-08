import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import order from "./order";
import history from "../../history";

export default combineReducers({
  router: connectRouter(history),
  order,
});
