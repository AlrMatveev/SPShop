import "./basket.css";
import BasketItem from "./basketItem";
import { connect } from "react-redux";
import { List, Typography } from "@mui/material";

function Basket({ products, order }) {
  const objectProducts = products.reduce(
    (acc, product) => ({ ...acc, [product.id]: product }),
    {}
  );

  const orderProducts = Object.keys(order)
    .filter((productId) => order[productId] > 0)
    .map((productId) => objectProducts[productId])
    .map((product) => ({
      product,
      amount: order[product.id],
      subtotal: order[product.id] * product.price,
    }));

  const total = orderProducts
    .map(({ subtotal }) => subtotal)
    .reduce((acc, subTotal) => acc + subTotal, 0);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" component="div">
        My basket
      </Typography>
      {orderProducts.map(({ product }) => (
        <BasketItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
      <Typography variant="body1" component="div">
        Total: {total} $
      </Typography>
    </List>
  );
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
