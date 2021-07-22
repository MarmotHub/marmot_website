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
          <h2 className={classes.mainTitle}>Why Marmot</h2>
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
            <h4 className={classes.title}>For Crypto Natives</h4>
            <p className={classes.description}>Direct Use of your favorite coins to trade/provide liquidity, with PNL also settled in your coins </p>
            <h4 className={classes.title}>No-slippage Trading</h4>
            <p className={classes.description}>Traders get infinite liquidity with no slippage</p>
            <h4 className={classes.title}>flexible market-making strategy </h4>
            <p className={classes.description}>Create customized market-making strategy for different LPs</p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
