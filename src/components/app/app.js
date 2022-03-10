import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../header";
import Basket from "../basket";
import Shop from "../shop";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/SinglePageShop" />
        <Route path="/checkout" component={Basket} />
        <Route path="/SinglePageShop/" component={Shop} />
        <Route path="/" component={() => <h2>404 - Page Not Found :(</h2>} />
      </Switch>
    </>
  );
}

export default App;
