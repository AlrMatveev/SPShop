import "./product.css";
import { connect } from "react-redux";
import { Grid, IconButton, Typography, Box } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { increment } from "../../../redux/actions";

function Product({ id, name, price, image, increment }) {
  const srcImage = `https://alrmatveev.github.io/SinglePageShop/images/${image}`;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <img src={srcImage}></img>
        <Typography gutterBottom variant="body1" component="div">
          {name}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          <IconButton
            onClick={increment}
            color="primary"
            aria-label="add to shopping cart"
          >
            <ShoppingCartCheckoutIcon />
          </IconButton>
          {price} $
        </Typography>
      </Box>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
});

export default connect(null, mapDispatchToProps)(Product);
