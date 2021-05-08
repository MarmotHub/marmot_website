import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(styles);

export default function TokendistSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.mainTitle}>Token Distribution</h2>
          <h5 className={classes.mainDescription}>
            Marmot values the inclusiveness and equality in decentralization,
            thus token distribution will be using the fair launch model; no pre-sale,
            no VC allocation, and open access for everyone.
            <br/>
            A total of 10 million MARMOT tokens will be issued.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <li className={classes.description} style={{paddingBottom:"1rem", fontFamily: "Roboto",}}><strong>An initial supply of 1million (10%)</strong> MARMOT tokens will be deposited to Uniswap
              to bootstrap the initial distribution. The team will not remove any liquidity before project launch on mainnet.</li>
            <li className={classes.description} style={{paddingBottom:"1rem", fontFamily: "Roboto",}}><strong>1.5million (15%)</strong> MARMOT tokens are reserved for the team.
              This portion will only be issued after the mainnet launch with 2-4 years vesting.</li>
            <li className={classes.description} style={{paddingBottom:"1rem", fontFamily: "Roboto"}}><strong>7.5million (75%)</strong> MARMOT tokens are reserved for community members to incentive liquidity providers,
              traders, stakers and community developers who participate in the Parapara project.
              As Parapara transitions to community governance, distribution of ecosystem rewards will be decided by the community.</li>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
