import "./tabs.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";

function Tabs({ brands }) {
  const tabs = brands.map(({ id, name }) => ({
    label: name,
    url: `/SPShop/${id}`,
  }));

  return (
    <ButtonGroup className="tabs" variant="text" aria-label="text button group">
      {tabs.map(({ label, url }) => (
        <Button key={label}>
          <Link to={url}>{label}</Link>
        </Button>
      ))}
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => ({
  brands: state.brands,
});

export default connect(mapStateToProps)(Tabs);

// {/* <Tabs
//   value={value}
//   onChange={handleChange}
//   textColor="secondary"
//   indicatorColor="secondary"
//   aria-label="secondary tabs example"
// >
//   <Tab value="one" label="Item One" />
//   <Tab value="two" label="Item Two" />
//   <Tab value="three" label="Item Three" />
// </Tabs> */}
