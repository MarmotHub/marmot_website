import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth
} from "assets/jss/material-kit-react.js";

const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#3C4858",
    width: "100%",
    backgroundColor: "#fff",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: {
    // ...container,
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
    maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
    maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
    maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
    maxWidth: "1140px"
    },
    "@media (min-width: 1450px)": {
    maxWidth: "1377px"
    },
    "@media (min-width: 1780px)": {
    maxWidth: "1720px"
    },
    "@media (min-width: 2050px)": {
    maxWidth: "2000px"
    },
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  titleSize: {
    textDecoration: "none",
    fontWeight: "700",
    display: "inline-block",
    position: "relative",
    marginLeft:"5%",
    marginTop: "2%",
    marginBottom: "2%",
    minHeight: "32px",
    fontSize: "10vw",
    fontFamily: "Aharoni",
    color:"#5474bc",
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
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
  },
  rose: {
    backgroundColor: roseColor,
    color: "#FFFFFF",
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    backgroundColor: "#fff !important",
    boxShadow: "none",
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition
  }
};

export default headerStyle;
