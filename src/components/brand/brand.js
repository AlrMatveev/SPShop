import "./brand.css";
import { connect } from "react-redux";
import Product from "./product";
import Basket from "../basket";
import Tabs from "../tabs";
import { Grid, Container } from "@mui/material";

function Brand({ id, brands }) {
  const brand = brands.find((elem) => elem.id == id);

  return (
    <Container maxWidth="lg">
      <Tabs />
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Grid container spacing={6}>
            {brand.products.map((productId) => {
              return <Product key={productId} productId={productId} />;
            })}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Basket />
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  brands: state.brands,
});

export default connect(mapStateToProps)(Brand);
