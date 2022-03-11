import "./shop.css";
import Tabs from "../tabs";
import Basket from "../basket";
import Brand from "../brand";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";

function Shop() {
  return (
    <Switch>
      <Route path="/SPShop/:brendId">
        {({ match }) => <Brand id={match.params.brendId} />}
      </Route>
      <Redirect to={`/SPShop/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2`} />
    </Switch>
  );
}

export default Shop;
