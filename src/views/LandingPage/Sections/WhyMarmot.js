import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import whatispara from "assets/img/whatispara.png";
import altcoins from "assets/img/altcoins.png"
import bitcoin_exchange from "assets/img/bitcoin_exchange.png"
import blockchain from "assets/img/blockchain.png"

const useStyles = makeStyles(styles);

const itemArray = [
  {
    text: "For Crypto Natives",
    detail: "Direct Use of your favorite coins to trade/provide liquidity, with PNL also settled in your coins",
    logo: altcoins,
  },
  {
    text: "No-slippage Trading",
    detail: "Traders get infinite liquidity with no slippage",
    logo: bitcoin_exchange
  },
  {
    text: "Flexible market-making strategy",
    detail: "Create customized market-making strategy for different LPs",
    logo: blockchain
  },
];

const Item = ({ text, detail, logo }) => {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgFluid
  );
  return (
    <Grid
      container
      // spacing={4}
      justify="space-between"
      alignItems="center"
      direction="row-reverse"
      style={{ marginBottom: 20, backgroundColor:"#F8F8F8", minHeight:"280px", paddingLeft:"2%", paddingRight:"2%",
        boxShadow: "0px 8px 22px -6px rgb(24 39 75 / 12%), 0px 14px 64px -4px rgb(24 39 75 / 12%)", borderRadius: 10, }}
    >
      <Grid item xs={12} sm={12} md={3}>
        <img src={logo} alt="..." className={imageClasses} style={{paddingTop:"1em", paddingBottom:"1em"}} />
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <h4 className={classes.title}>{text}</h4>
        <p className={classes.description}>{detail}</p>
      </Grid>
    </Grid>
  );
};

export default function IntroductionSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgFluid);
  const navImageClasses = classNames(
    classes.imgRounded,
    classes.imgGallery
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.mainTitle}>
            Why Use
            <a style={{'color': "#5474bc"}}> Marmot </a>
            ?
          </h2>
          <h5 className={classes.mainDescription}>
            Marmot Finance is a universal protocol for all
            perpetuables, including perpetual futures,
            perpetual ETFs, and perpetual options.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <Grid
          direction="column"
          alignItems="center"
          container
          style={{ paddingTop: 20 }}
        >
          {itemArray.map((item, index) => {
            return <Item {...item} key={index} />;
          })}
        </Grid>
      </div>
    </div>
  );
}
