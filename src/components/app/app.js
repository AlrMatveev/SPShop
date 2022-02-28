import Header from "../header";
import Products from "../products";
import Basket from "../basket";
import Grid from "@mui/material/Grid";

function App({ products }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Products products={products} />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Basket products={products} />
      </Grid>
    </Grid>
  );
}

export default App;
