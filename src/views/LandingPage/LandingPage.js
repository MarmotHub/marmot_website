import React from "react";
import ReactGA from 'react-ga';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import {Helmet} from 'react-helmet'
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TokenintroSection from "./Sections/TokenintroSection.js";
import TokendistSection from "./Sections/TokendistSection.js";
import RoadmapSection from "./Sections/RoadmapSection.js";
import IntroductionSection from "./Sections/IntroductionSection.js";
import HowtoworkSection from "./Sections/HowtoworkSection.js";

import marmotLand from "../../assets/img/logo/marmot_land.png"
import {container} from "../../assets/jss/material-kit-react";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {
    const classes = useStyles();
    ReactGA.initialize('UA-196573876-1');
    ReactGA.pageview('/Homepage');
    const {...rest} = props;
    console.log('I was triggered during render');
    return (
        <div>
            <Helmet>
                <title>Marmot Finance | Derivative DEX for Any Asset</title>
            </Helmet>
            {/*<Helmet>*/}
            {/*    <style>{'body { background-color: black; }'}</style>*/}
            {/*</Helmet>*/}
            {/*<div style={{ background: `url(${background})` }}>*/}
            {/*<div style={{ backgroundColor: "#d1fdfe"}}>*/}
            <div style={
                {
                    backgroundColor: "white",
                    paddingBottom: "5%",
                }
            }>
                {/*<div style={{*/}
                {/*    position: "absolute",*/}
                {/*    backgroundColor: "#d1fdfe",*/}
                {/*    height: "100%",*/}
                {/*    top: "5%",*/}
                {/*    left: "15%",*/}
                {/*    right: "50%",*/}
                {/*    zIndex: "0"*/}
                {/*}}>*/}
                {/*</div>*/}
                {/*<div style={{*/}
                {/*    position: "absolute",*/}
                {/*    backgroundColor: "#fedcd1",*/}
                {/*    height: "100%",*/}
                {/*    top: "5%",*/}
                {/*    right: "15%",*/}
                {/*    left: "50%",*/}
                {/*    zIndex: "0"*/}
                {/*}}>*/}
                {/*</div>*/}
                <Header
                    color="white"
                    routes={dashboardRoutes}
                    brand=""
                    rightLinks={<HeaderLinks/>}
                    // fixed
                    // changeColorOnScroll={{
                    //   height: 400,
                    //   color: "white"
                    // }}
                    style={{paddingBottom: "5em", zIndex: "1"}}
                    {...rest}
                />
                <div className={classes.container} style={{
                    marginTop: "4vh",
                    height: "80vh",
                    maxWidth: "2000px",
                    backgroundColor: "white",
                    backgroundImage: `url(${marmotLand})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }}>
                    <div style={{
                            width: '80%',
                            marginLeft: "10%",
                            marginRigth: "10%",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                                <h1 className={classes.title}
                                    style={{float: "right"}}>
                                    <span className={classes.titleSize}>Marmot</span>
                                </h1>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                                <h1 className={classes.title}
                                    style={{float: "left"}}>
                                    <span className={classes.titleSize} style={{
                                        color: "#e4c475",
                                    }}>Finance</span>
                                </h1>
                            </GridItem>
                            <br/>

                            <GridItem xs={12} sm={12} md={12}>
                                <h1 className={classes.contentSize}>
                                    a decentralized way to gain exposure to any asset.
                                </h1>
                                <br/>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <Button
                                        size="lg"
                                        href="https://app.marmot.exchange"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        justify="center"
                                    >
                                        <i className="fas fa-play"/>
                                        LAUNCH APP
                                    </Button>
                                </div>
                                <br/>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>

            </div>
            <div className={classNames(classes.main)} style={{backgroundColor: "white"}}>
                <div className={classes.contentContainer} style={{width: "100%"}}>
                    <IntroductionSection/>
                </div>
            </div>
            <div className={classNames(classes.main)} style={{backgroundColor: "#ffffd7"}}>
                <div className={classes.container} style={{width: "100%"}}>
                    <HowtoworkSection/>
                </div>
            </div>
            <div className={classNames(classes.main)} style={{backgroundColor: "white"}}>
                <div className={classes.container} style={{width: "100%"}}>
                    <TokenintroSection/>
                </div>
            </div>
            {/*<div className={classNames(classes.main)} style={{backgroundColor: "#ffffd7"}}>*/}
            {/*    <div className={classes.container} style={{width: "100%"}}>*/}
            {/*        <TokendistSection/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={classNames(classes.main)} style={{backgroundColor: "white"}}>*/}
            {/*    <div className={classes.container} style={{width: "100%"}}>*/}
            {/*        <RoadmapSection/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={classNames(classes.main)} style={{backgroundColor: "#fff7a5"}}>
                <div className={classes.container} style={{width: "100%", color:"#303f64"}}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

const localStyle = {
    titleSize: {
        color: "#5474bc",
        fontFamily: "Aharoni",
        "@media (min-width: 576px)": {
          fontSize: "10vw",
        },
        "@media (min-width: 768px)": {
          fontSize: "8vw",
        },
        "@media (min-width: 992px)": {
          fontSize: "4vw",
        },
        "@media (min-width: 1200px)": {
          fontSize: "4vw",
        }
    }
}
