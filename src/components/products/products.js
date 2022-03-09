import "./products.css";
import Product from "./product";
import { connect } from "react-redux";
import { Grid, Container } from "@mui/material";

function Products({ products }) {
  return (
    <Grid container spacing={6}>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Products);
