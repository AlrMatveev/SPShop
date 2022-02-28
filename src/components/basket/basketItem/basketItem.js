import "./basketItem.css";
import { connect } from "react-redux";
import { increment, decrement, remove } from "../../../redux/actions";
import { IconButton, Typography, Box, Grid } from "@mui/material";
import { Delete, AddCircle, RemoveCircle } from "@mui/icons-material";

function BasketItem({ id, name, price, amount, increment, decrement, remove }) {
  const subTotal = price * amount + " $";

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="body1" component="div">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="delete" onClick={remove}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={decrement}
          >
            <RemoveCircle />
          </IconButton>
          {amount}
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={increment}
          >
            <AddCircle />
          </IconButton>
          {subTotal}
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state, props) => ({
  amount: state.order[props.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
  remove: () => dispatch(remove(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
