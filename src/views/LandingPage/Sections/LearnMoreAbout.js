import React from "react";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Grid from "@material-ui/core/Grid";
import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { Apps, Twitter, GitHub, Telegram } from "@material-ui/icons";
import handShake from "../../../assets/img/icon/farm.png";
import classNames from "classnames";
import marmotLogo from "../../../assets/img/logo/marmotLogo.png"
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
const useStyles = makeStyles(styles);

const itemArray = [
  {
    text: "Intro to marmot finance",
    Icon: () => (
      <Brightness5Icon
        style={{
          width: 146,
          height: 146,
          color: "deepskyblue",
        }}
      />
    ),
  },
  {
    text: "Intro to marmot finance",
    Icon: () => (
      <Brightness5Icon
        style={{
          width: 146,
          height: 146,
          color: "deepskyblue",
        }}
      />
    ),
  },
  {
    text: "Intro to marmot finance",
    Icon: () => (
      <Brightness5Icon
        style={{
          width: 146,
          height: 146,
          color: "deepskyblue",
        }}
      />
    ),
  },
];

const LearnMoreAbout = () => {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgFluid
  );

  return (
    <Grid container direction="column" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <Grid item style={{ alignSelf: "center", marginBottom: 60 }}>
        <h2 className={classes.mainTitle}>
          Learn more about Marmot Finance
        </h2>
      </Grid>
      <Grid item xs={8} sm={8} md={12} style={{ alignSelf: "center" }}>
        <Grid container justify="space-between">



            <Grid item xs={12} sm={12} md={3} style={{ paddingBottom: 20 }}>
                <a href="https://medium.com/alpaca-finance/introducing-alpaca-finance-d6e858896efd" target="blank">
              <Grid container xs={12} sm={12} md={3} direction="column" alignItems="center" className={classes.learnCell}>
                <img src={marmotLogo} alt="..." style={{width: 146, height: 146, color: "#5474BC",}} />
                <span className={classes.learnCellText}>
                  Intro to Marmot Finance
                </span>
              </Grid>
                </a>
            </Grid>


            <Grid item xs={12} sm={12} md={3} style={{ paddingBottom: 20 }}>
                <a href="https://medium.com/alpaca-finance/introducing-alpaca-finance-d6e858896efd" target="blank">
              <Grid container xs={12} sm={12} md={3} direction="column" alignItems="center" className={classes.learnCell}>
                <DonutSmallIcon style={{width: 146, height: 146, color: "#5474BC",}}/>
                <span className={classes.learnCellText}>
                  Tokenomics
                </span>
              </Grid>
                    </a>
            </Grid>

            <Grid item xs={12} sm={12} md={3} style={{ paddingBottom: 20 }}>
                <a href="https://medium.com/alpaca-finance/introducing-alpaca-finance-d6e858896efd" target="blank">
              <Grid container xs={12} sm={12} md={3} direction="column" alignItems="center" className={classes.learnCell}>
                <SupervisedUserCircleIcon style={{width: 146, height: 146, color: "#5474BC",}}/>
                <span className={classes.learnCellText}>
                  Join Us
                </span>
              </Grid>
                </a>
            </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

const Item = ({ text, Icon }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={3} style={{ paddingBottom: 20 }}>
      <Grid container direction="column" alignItems="center" className={classes.learnCell}>
        <Icon />
        <span className={classes.learnCellText}>
          {text}
        </span>
      </Grid>
    </Grid>
  );
};

export default LearnMoreAbout;
