import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../header";
import Basket from "../basket";
import Shop from "../shop";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/" to="/shop" />
        <Route path="/checkout" component={Basket} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </>
  );
}

export default App;
