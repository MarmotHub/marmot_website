/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Twitter, GitHub, Telegram } from "@material-ui/icons";
import MediumIcon from "components/Logo/Medium.js";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://docs.marmot.finance"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Apps className={classes.icons} />Documentation
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://marmotfinance.medium.com/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <MediumIcon className={classes.icons} />{window.innerWidth > 959 ? "": " Medium"}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/MarmotHub"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <GitHub className={classes.icons} />{window.innerWidth > 959 ? "": " Github"}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://t.me/joinchat/Ub0Arx0t_n0wdMA4fPyitg"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Telegram className={classes.icons} />{window.innerWidth > 959 ? "": " Telegram"}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://twitter.com/marmot_finance"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Twitter className={classes.icons} />{window.innerWidth > 959 ? "": " Twitter"}
        </Button>
      </ListItem>

    </List>
  );
}
