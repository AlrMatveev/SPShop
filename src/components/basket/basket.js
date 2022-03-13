import "./basket.css";
import BasketItem from "./basketItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, List, Typography } from "@mui/material";

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
        borderLeft: "1px solid #eee",
        paddingLeft: "10px",
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
      {total === 0 ? (
        <Typography variant="body1" component="div">
          add item to basket
        </Typography>
      ) : (
        <>
          <Typography sx={{ m: 3 }} variant="body1" component="div">
            Total: {total} $
          </Typography>
          <Button variant="contained">
            <Link to={"/checkout"}>Checkout</Link>
          </Button>
        </>
      )}
    </List>
  );
}

const mapStateToProps = (state) => ({
  order: state.order,
  products: state.products,
});

export default connect(mapStateToProps)(Basket);
