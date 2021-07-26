import React from "react";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Grid from "@material-ui/core/Grid";
import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <Grid
      container
      direction="column"
      style={{ paddingTop: 70, paddingBottom: 70 }}
    >
      <Grid
        item
        style={{ alignSelf: "center", marginBottom: 60 }}
      >
        <h2 className={classes.learnHeader}>
          Learn more about Alpaca Finance
        </h2>
      </Grid>
      <Grid
        item
        xs={8}
        sm={8}
        md={12}
        style={{ alignSelf: "center" }}
      >
        <Grid container justify="space-between">
          {itemArray.map((item, index) => {
            return <Item {...item} key={index} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const Item = ({ text, Icon }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={3}
      style={{ paddingBottom: 20 }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.learnCell}
      >
        <Icon />
        <span className={classes.learnCellText}>
          {text}
        </span>
      </Grid>
    </Grid>
  );
};

export default LearnMoreAbout;
