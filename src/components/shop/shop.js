import "./shop.css";
import Tabs from "../tabs";
import Products from "../products";
import Basket from "../basket";
import Brand from "../brand";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";

function Shop() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Tabs />
          <Switch>
            <Route path="/SinglePageShop/:brendId">
              {({ match }) => <Brand id={match.params.brendId} />}
            </Route>
            <Redirect
              to={`/SinglePageShop/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2`}
            />
          </Switch>
        </Grid>
        <Grid item xs={4}>
          <Basket />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Shop;
