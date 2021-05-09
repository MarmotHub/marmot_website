/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Twitter, GitHub, Telegram, Apps} from "@material-ui/icons";
import MediumIcon from "components/Logo/Medium.js";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="https://medium.com/@paraproject"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <MediumIcon className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://github.com/ParaParaProject"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <GitHub className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://t.me/joinchat/Ub0Arx0t_n0wdMA4fPyitg"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <Telegram className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://twitter.com/parapara_proj"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <Twitter className={classes.icons} />
              </Button>
            </ListItem>
          </List>
        </div>
        <div className={classes.right} style={{color:"#303f64"}}>
          Marmot Finance &copy; {1900 + new Date().getYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
