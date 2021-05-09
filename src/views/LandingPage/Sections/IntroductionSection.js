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
          <h2 className={classes.mainTitle}>What is Marmot Finance</h2>
          <h5 className={classes.mainDescription}>
            Marmot Fi. aims to build the most inclusive on-chain perpetual swap exchange and provide permissionless
            access to virtually any asset.

          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} >
            <img src={whatispara} alt="..." className={imageClasses} style={{paddingTop:"2em"}} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h4 className={classes.title}>20x Leverage Perpetual Contract</h4>
            <p className={classes.description}>Traders can trade with up to 20x leverage long or short.
              With integration of price feeds from oracles, Marmot is set to provide perpetual contracts for all kinds of underlying asset,
              including cryptos, commodities, major ETFs and selected stocks.</p>
            <h4 className={classes.title}>10x Better Liquidity</h4>
            <p className={classes.description}>Marmot optimized constant product (xy=k) market makers which suffers from high slippage and impermannent loss.
              Marmot concentrates liquidity around the mark price of the asset,
              and incentive traders only to trade near the mark price, thus protect liquidity providers from aribitrage loss.</p>
            <h4 className={classes.title}>HODL on Derivatives </h4>
            <p className={classes.description}>The unique design of Marmot eliminates the annoying funding payment of perpetual contracts.
              Traders ONLY need to pay one-time transaction fee, nothing else.
              Therefore traders can HODL a long position as long as it is fully collateralized, just like spot trading.</p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
