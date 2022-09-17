import React from "react";
import {
  mixClass,
  reactStyle,
  Image,
  SemanticUI,
  Title,
} from "react-atomic-molecule";

const Brand = ({ className, style, logoStyle, brandName, brandNameOnly }) => {
  let classes = mixClass(className, "brand");
  if (brandNameOnly) {
    return (
      <SemanticUI style={{ ...Styles.container, ...style }} className={classes}>
        <SemanticUI styles={reactStyle(Styles.wrap, false, false)}>
          <Title style={Styles.title} atom="span">
            {brandName}
          </Title>
        </SemanticUI>
      </SemanticUI>
    );
  }
  return (
    <SemanticUI
      atom="a"
      href="/"
      style={{ ...Styles.container, ...style }}
      className={classes}
    >
      <SemanticUI styles={reactStyle(Styles.wrap, false, false)}>
        <Image
          src="/static/images/logo.svg"
          styles={reactStyle({ ...Styles.logo, ...logoStyle }, false, false)}
        />
        <Title style={Styles.title} atom="span">
          {brandName}
        </Title>
      </SemanticUI>
    </SemanticUI>
  );
};

export default Brand;

const Styles = {
  container: {
    boxSizing: "border-box",
    position: "relative",
    display: "block",
  },
  wrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: ["translate(-50%, -50%)"],
    width: "100%",
    textAlign: "center",
  },
  logo: {
    width: 50,
    display: "block",
    margin: "0 auto",
    verticalAlign: "bottom",
  },
  title: {
    fontWeight: 400,
    fontSize: "2rem",
    color: "#57b3ab",
  },
};
