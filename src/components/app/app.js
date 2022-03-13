import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../header";
import Checkout from "../checkout";
import Shop from "../shop";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/SPShop" />
        <Route path="/checkout" component={Checkout} />
        <Route path="/SPShop/" component={Shop} />
        <Route path="/" component={() => <h2>404 - Page Not Found :(</h2>} />
      </Switch>
    </>
  );
}

export default App;
