import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import Dao from "components/Logo/Dao.js"
import Bagholder from "components/Logo/Bagholder.js"

const useStyles = makeStyles(styles);

export default function TokenintroSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.mainTitle}>What is MARMOT token</h2>
          <h5 className={classes.mainDescription}>
            The MARMOT token is the utility token of the platform and will be distributed to marmot community on an ongoing basis.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Incentivization"
              description="MARMOT tokens accrue economic value by converting part of transaction fees into MARMOT and distributing to token holders.
               Most MARMOT tokens will be distributed to community members with emphasis on community-led growth, development, and self-sustainability.
               "
              icon={Bagholder}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Governance"
              description="Marmot is committed to be the most inclusive yet diversified DEX.
              Decentralized autonomous organization (DAO) will be the ideal form of governance to serve everyone's interest.
              As the project matures and MARMOT tokens are distributed sufficiently dispersed,
              Marmot will gradually transit to community governance."
              icon={Dao}
              iconColor="success"
              vertical
              style={{opacity:"1"}}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
