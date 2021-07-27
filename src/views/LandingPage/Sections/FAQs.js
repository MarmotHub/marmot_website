import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(styles);

const textArray = [
  {
    top: "What's the goal of this project?",
    detail:
      "Our goal is to democratize powerful trading tools. Leveraged derivatives trading used to be the exclusive domain of centralized organizations and wealthy individuals. Perpetual Protocol lowers the barrier, making advanced trading tools available to all.",
  },
  {
    top: "What is Perpetual Protocol for?",
    detail:
      "Perpetual Protocol lets you trade a wide range of assets, including short selling, with up to 10x leverage. In addition, you can earn fees by providing liquidity or staking protocol tokens. All this can be done programmatically, or via web3 interfaces.",
  },
  {
    top: "What are Virtual AMMs (vAMMs)?",
    detail:
      "vAMMs are an innovation by Perpetual Protocol that allows traders to use leverage and short selling while trading on an AMM style exchange made famous by Uniswap and others. Unlike AMMs, where pools of asset pairs are used to do swaps, vAMMs work with only one asset as collateral for leveraged trades. Visit our docs  to learn more.",
  },
  {
    top: "Is it safe to trade on Perpetual Protocol?",
    detail:
      "Perpetual Protocol's smart contract code is audited in an ongoing process with auditing firms Consensys and Peckshield. In addition, Perpetual Protocol has purchased coverage for all protocol users from Nexus Mutual and Unslashed Finance to cover users in the event of a smart contract bug or exploit.",
  },
];

const FAQs = () => {
  const classes = useStyles();
  return (
    <Grid container style={{ padding: "70px 0" }}>
      <Grid item xs={12} sm={12} md={4}>
        <div className={classes.leftBox}>
          <h2 className={classes.heading}>Q&A</h2>
          <p className={classes.paragraph0Left}>
            Some quick answers to common questions, or head
            to the documentation to learn more.
          </p>

          <Button
            size="lg"
            href="http://docs.paraproject.io/#/2_How_It_Works"
            target="_blank"
            rel="noopener noreferrer"
            style={{float:"left", color: "#FFFFFF", backgroundColor: "#E6C476", padding: "20px"}}
          >Documentation
            </Button>

        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <div className={classes.rightBox}>
          {textArray.map((item, index) => {
            return <Items {...item} key={index} />;
          })}
        </div>
      </Grid>
    </Grid>
  );
};

const Items = ({ top, detail }) => {
  const classes = useStyles();
  const [isShow, setIsShow] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={
        hover ? classes.boxTextHover : classes.boxText
      }
      onClick={() => {
        setIsShow(!isShow);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className={classes.divBlock8}>
        <div
          style={{
            color: "#E6C476",
            fontSize: 24,
          }}
          className={classes.plusIcon}
        >
          {!isShow ? "+" : "-"}
        </div>
      </div>
      <div className={classes.divBlock7}>
        <h6
          className={classes.faqs}
        >
          {top}
        </h6>
        <p
          className={classes.small}
          style={{
            display: !isShow ? "none" : "block",
          }}
        >
          {detail}
        </p>
      </div>
    </div>
  );
};

export default FAQs;
