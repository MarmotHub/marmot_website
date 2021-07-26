import { title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const introductionStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  mainTitle: {
    ...title,
    fontFamily: "Roboto",
    fontSize: "2.5rem",
    textAlign: "left",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  title: {
    ...title,
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    textAlign: "left",
    marginBottom: "1rem",
    marginTop: "0",
    minHeight: "32px",
    textDecoration: "none",
  },
  mainDescription: {
    fontFamily: "Roboto",
    fontSize: "120%",
    textAlign: "justify",
    color: "#3C4858",
  },
  description: {
    fontFamily: "Roboto",
    fontSize: "100%",
    textAlign: "justify",
    color: "#3C4858",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  round: {
    width: 144,
    height: 144,
    borderRadius: "50%",
    backgroundColor: "deepskyblue",
    margin: "auto",
  },
};

export default introductionStyle;
