import "./header.css";
import { connect } from "react-redux";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function Header({ order }) {
  const amount = Object.values(order).reduce((acc, value) => acc + value, 0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SinglePageShop
          </Typography>
          <Badge badgeContent={amount} color="secondary">
            <IconButton color="inherit" aria-label="add to shopping cart">
              <ShoppingCartCheckoutIcon />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Header);
