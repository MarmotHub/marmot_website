import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  containerPad: {
    height: "360px",
    color: "#FFFFFF",
    ...container
  },
  contentContainer: {
    zIndex: "12",
    color: "#FFFFFF",
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
      maxWidth: "860px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "860px"
    }
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  titleSize: {
        color: "#5474bc",
        fontFamily: "Aharoni",
        fontSize: "10vw",
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
  contentSize: {
        ...title,
        color: "#303f64",
        fontFamily: "Roboto",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: "5vw",
        "@media (min-width: 576px)": {
          fontSize: "5vw",
        },
        "@media (min-width: 768px)": {
          fontSize: "4vw",
        },
        "@media (min-width: 992px)": {
          fontSize: "2vw",
        },
        "@media (min-width: 1200px)": {
          fontSize: "2vw",
        }
    }
};

export default landingPageStyle;
