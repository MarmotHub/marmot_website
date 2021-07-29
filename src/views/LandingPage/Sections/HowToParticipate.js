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
import community from "../../../assets/img/icon/community.png";
import fairlaunch from "../../../assets/img/icon/fairlaunch.png";
import farm from "../../../assets/img/icon/farm.png";
import join from "../../../assets/img/icon/join.png";

const useStyles = makeStyles(styles);

const itemArray = [
  {
    text: "Commnunity Driven",
    detail: "85% token will be distributed to community",
    icon: community,
  },
  {
    text: "Fair Launch",
    detail: "No sale or pre-mining of tokens",
    icon: fairlaunch,
  },
  {
    text: "Join our Farm",
    detail: "Liquidity Farming will be alive on 2021.08.31",
    icon: farm,
  },
];

const Item = ({ text, detail, icon }) => {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgFluid
  );
  return (
    <Grid container justify="space-between" alignItems="center" direction="row-reverse" style={{ marginBottom: 20 }}>
      <Grid item xs={12} sm={12} md={10} style={{ textAlign: "right" }}>
        <h4 className={classes.title} style={{ textAlign: "right" }}>
          {text}
        </h4>
        <p className={classes.description} style={{ textAlign: "right" }}>
          {detail}
        </p>
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <img src={icon} alt="..." className={imageClasses} style={{paddingTop:"2em", paddingBottom:"2em"}} />
      </Grid>
    </Grid>
  );
};

export default function IntroductionSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgFluid);

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.mainTitle}>
            How To Participate?
          </h2>
        </GridItem>
      </GridContainer>
      <div>
        <Grid direction="column" alignItems="center" container style={{ paddingTop: 20 }}>
          {/*{itemArray.map((item, index) => {*/}
          {/*  return <Item {...item} key={index} />;*/}
          {/*})}*/}

          <Grid container justify="space-between" alignItems="center" direction="row" style={{ marginBottom: 20 }}>

            <GridItem item xs={12} sm={12} md={6}>
              <img src={community} alt="..." className={imageClasses} style={{paddingTop:"1em", paddingBottom:"1em", height:"180px", textAlign:'left'}} />
              <h4 className={classes.title} style={{ textAlign: "left" }}>
                Commnunity Driven
              </h4>
              <p className={classes.description} style={{ textAlign: "left" }}>
                85% token will be distributed to community
              </p>
            </GridItem>
            <GridItem item xs={12} sm={12} md={6}>
              <img src={fairlaunch} alt="..." className={imageClasses} style={{paddingTop:"1em", paddingBottom:"1em",height:"180px", textAlign:'left'}} />
              <h4 className={classes.title} style={{ textAlign: "left" }}>
                Fair Launch
              </h4>
              <p className={classes.description} style={{ textAlign: "left" }}>
                No sale or pre-mining of tokens
              </p>
            </GridItem>
            <GridItem item xs={12} sm={12} md={6}>
              <img src={farm} alt="..." className={imageClasses} style={{paddingTop:"1em", paddingBottom:"1em", height:"180px", textAlign:'left'}} />
              <h4 className={classes.title} style={{ textAlign: "left" }}>
                Join our Farm
              </h4>
              <p className={classes.description} style={{ textAlign: "left" }}>
                Liquidity Farming will be alive on 2021.08.31
              </p>
            </GridItem>
            <GridItem item xs={12} sm={12} md={6}>
              <img src={join} alt="..." className={imageClasses} style={{paddingTop:"1em", paddingBottom:"1em", height:"180px", textAlign:'left'}} />
              <br/>
              <Button
                size="lg"
                href="http://docs.paraproject.io/#/2_How_It_Works"
                target="_blank"
                rel="noopener noreferrer"
                style={{textAlign: "left",  color: "#FFFFFF", backgroundColor: "#5474BC", padding: "20px", marginTop:"1em"}}
              >LAUNCH MARMOT FARM
            </Button>
            </GridItem>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
