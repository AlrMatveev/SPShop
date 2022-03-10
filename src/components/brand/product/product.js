import "./product.css";
import { connect } from "react-redux";
import { Grid, IconButton, Typography, Box } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { increment } from "../../../redux/actions";

function Product({ productId, products, increment }) {
  const product = products.find((elem) => elem.id == productId);
  const srcImage = `https://alrmatveev.github.io/SinglePageShop/images/${product.image}`;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <img className="imageProduct" src={srcImage}></img>
        <Typography gutterBottom variant="body1" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          <IconButton
            onClick={increment}
            color="primary"
            aria-label="add to shopping cart"
          >
            <ShoppingCartCheckoutIcon />
          </IconButton>
          {product.price} $
        </Typography>
      </Box>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
