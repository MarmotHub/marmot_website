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
import handShake from "../../../assets/img/icon/handShake.png";

const useStyles = makeStyles(styles);

const itemArray = [
  {
    text: "Commnunity Driven",
    detail: "85% token will be distributed to community",
  },
  {
    text: "Fair Launch",
    detail: "No sale or pre-mining of tokens",
  },
  {
    text: "Join our Farm",
    detail: "Liquidity Farming will be alive on 2021.08.31",
  },
];

const Item = ({ text, detail, color }) => {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgFluid
  );
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      direction="row-reverse"
      style={{ marginBottom: 20 }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        style={{ textAlign: "right" }}
      >
        <h4
          className={classes.title}
          style={{ textAlign: "right" }}
        >
          {text}
        </h4>
        <p
          className={classes.description}
          style={{ textAlign: "right" }}
        >
          {detail}
        </p>
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <img src={handShake} alt="..." className={imageClasses} style={{paddingTop:"2em", paddingBottom:"2em"}} />
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
            How To Participate?
          </h2>
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
          <Grid item style={{ alignSelf: "flex-end" }}>
            {/*<Button*/}
            {/*  variant="contained"*/}
            {/*  color="primary"*/}
            {/*  style={{ marginTop: 40 }}*/}
            {/*>*/}
            {/*  新增按钮*/}
            {/*</Button>*/}
            <br />
            <Button
                size="lg"
                href="http://docs.paraproject.io/#/2_How_It_Works"
                target="_blank"
                rel="noopener noreferrer"
                style={{float:"left", color: "#FFFFFF", backgroundColor: "#548ff7", padding: "20px"}}
              >Learn More about How Marmot works
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
