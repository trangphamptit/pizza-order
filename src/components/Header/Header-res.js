import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import "./Header-res.scss";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <li className="res-item">
          <Link to="/"> home</Link>
        </li>
        <li className="res-item">
          <Link to="/listcategory"> category</Link>
        </li>
        <li className="res-item">
          <Link to="/"> profile</Link>
        </li>
        <li className="res-item">
          <Link to="/"> about us</Link>
        </li>
      </List>
    </div>
  );

  return (
    <div>
      <span onClick={toggleDrawer("right", true)}>
        <i class="fas fa-bars" />
      </span>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
