import React, { useState } from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import "./FAQs.css";

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
  return (
    <Grid container style={{ padding: "70px 0" }}>
      <Grid item xs={12} sm={12} md={4}>
        <div className="left-box">
          <h2 className="heading">FAQs</h2>
          <p className="paragraph0-left">
            Get quick answers to common questions, or head
            to the documentation to learn more.
          </p>
          <a
            href=""
            target="_blank"
            className="left-button"
            style={{ marginBottom: 20 }}
          >
            <div className="div-block">
              <h6 className="button-lable">
                Documentation
              </h6>
            </div>
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <div className="right-box">
          {textArray.map((item, index) => {
            return <Items {...item} key={index} />;
          })}
        </div>
      </Grid>
    </Grid>
  );
};

const Items = ({ top, detail }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="box-text"
      onClick={() => {
        setIsShow(!isShow);
      }}
    >
      <div className="div-block-8">
        <div
          style={{
            color: "rgb(60, 234, 170)",
            fontSize: 24,
          }}
          className="plus-icon"
        >
          {!isShow ? "+" : "-"}
        </div>
      </div>
      <div className="div-block-7">
        <h6
          style={{ color: "rgb(13, 45, 63)" }}
          className="faqs"
        >
          {top}
        </h6>
        <p
          className="small"
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
