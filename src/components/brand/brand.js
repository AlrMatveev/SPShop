import "./brand.css";
import { connect } from "react-redux";
import Product from "./product";
import { Grid, Container } from "@mui/material";

function Brand({ id, brands }) {
  const brand = brands.find((elem) => elem.id == id);

  return (
    <Grid container spacing={6}>
      {brand.products.map((productId) => {
        return <Product key={productId} productId={productId} />;
      })}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  brands: state.brands,
});

export default connect(mapStateToProps)(Brand);
