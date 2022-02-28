import "./products.css";
import Product from "./product";
import { Grid, Container } from "@mui/material";

function Products({ products }) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={6}>
        {products.map((products) => (
          <Product
            key={products.id}
            id={products.id}
            name={products.name}
            price={products.price}
            image={products.image}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
