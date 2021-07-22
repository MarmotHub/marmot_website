import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import whatispara from "assets/img/whatispara.png";

const useStyles = makeStyles(styles);

export default function IntroductionSection() {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.mainTitle}>How To Participate</h2>
          <h5 className={classes.mainDescription}>
            Marmot Finance is a universal protocol for all perpetuables, including perpetual futures, perpetual ETFs, and perpetual options.

          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} >
            <img src={whatispara} alt="..." className={imageClasses} style={{paddingTop:"2em"}} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h4 className={classes.title}>Commnunity Driven</h4>
            <p className={classes.description}>85% token will be distributed to community </p>
            <h4 className={classes.title}>Fair Launch </h4>
            <p className={classes.description}>No sale or pre-mining of tokens</p>
            <h4 className={classes.title}>Join our Farm </h4>
            <p className={classes.description}>Liquidity Farming will be alive on 2021.08.31</p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
