import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import MuiAlert from '@material-ui/lab/Alert';
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import howto from 'assets/img/howto.png';
const useStyles = makeStyles(styles);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function HowtoworkSection() {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.mainTitle}>How does Marmot work</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h4 className={classes.title}>Long/Short with traders</h4>
            <p className={classes.description}>Marmot introduces market makers, i.e. liquidity pools, into derivative trading.
              But unlike other DEXs, Marmot's AMM does not conduct token exchanges, but long/short with traders.
              Liquidity pools are composed of USD stable coins. Whenever a trader open a position,
              the liquidity pool will use the funds as margin to open the opposite position as the counterparty.
              After the trader closes the position, liquidity pools will also close positions and settle profit with the trader.</p>
            <h4 className={classes.title}>Pricing formula</h4>
            <p className={classes.description}>Marmot uses an optimized pricing formula to determine the effective price for each trade.
              Specifically, the pricing formula is composed of the current mark price provided by the oracle,
              and virtual token pair balances. Marmot actively adjusts the price to align with the oracle price,
              meanwhile allowing dynamic price fluctuation with demand.</p>
            <br />
              <Button
                color="para"
                size="lg"
                href="http://docs.paraproject.io/#/2_How_It_Works"
                target="_blank"
                rel="noopener noreferrer"
                style={{float:"left"}}
              >Learn More about How Marmot works
              </Button>
            <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={6} >
            <img src={howto} alt="..." className={imageClasses} style={{paddingTop:"0em"}}/>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
