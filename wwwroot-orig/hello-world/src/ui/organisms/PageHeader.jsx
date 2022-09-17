import React from "react";
import {
  min,
  mixClass,
  lazyInject,
  Button,
  SemanticUI,
} from "react-atomic-molecule";
import { getHorizontalToVerticalMenu } from "organism-react-navigation";
import { PageHeader as LandingPageHeader } from "pmvc_react_landing";
import { Section, Return } from "reshow";
import get from "get-object-value";

import SelectLanguage from "../organisms/SelectLanguage";
import Brand from "../organisms/Brand";
import PageNav from "../organisms/PageNav";

const HorizontalToVerticalMenu = getHorizontalToVerticalMenu(
  {
    hamburgerIcon: {
      position: "absolute",
      top: 10,
      right: 30,
      width: 35,
      height: 35,
      fill: "#000",
      cursor: "pointer",
    },
  },
  true
);

const HeaderButton = ({ I18N, tradeDefaultUrl }) => (
  <div className="header-button" style={Styles.headerButton}>
    <SelectLanguage />
    <Section name="">
      <Button className="primary" href={tradeDefaultUrl} atom="a">
        {get(I18N, ["trade"])}
      </Button>
    </Section>
  </div>
);

const HeaderNav = ({ handleOn, tradeDefaultUrl, ...props }) => (
  <SemanticUI className="pure-u-1 pure-u-lg-4-5">
    <Section name="pageHeaderNav">
      <PageNav {...props} handleOn={handleOn} />
      <HeaderButton {...props} tradeDefaultUrl={tradeDefaultUrl} />
    </Section>
  </SemanticUI>
);

const PageHeader = (props) => {
  injects = lazyInject(injects, InjectStyles);
  let classes = mixClass("pure-g", "page-header");
  return (
    <Return initStates={["tradeDefaultUrl", "brandName", "section"]}>
      {({ tradeDefaultUrl, brandName, section }) => {
        const isRenderNav = get(section, ["pageHeaderNav", "shouldRender"]);
        let thisNav;
        if (isRenderNav) {
          thisNav = <HeaderNav tradeDefaultUrl={tradeDefaultUrl} />;
        }
        return (
          <HorizontalToVerticalMenu
            style={Styles.container}
            className={classes}
            atom="header"
            brand={
              <Brand
                brandName={brandName}
                className="pure-u-1-2 pure-u-lg-1-5"
                {...props}
              />
            }
            nav={thisNav}
            height={73}
            component={LandingPageHeader}
          />
        );
      }}
    </Return>
  );
};

export default PageHeader;

const Styles = {
  container: {
    maxHeight: 60,
    minWidth: 350,
    boxSizing: "border-box",
    position: "fixed",
    background: "#fff",
    overflow: "visible",
  },
  headerNav: {
    padding: 0,
    margin: 0,
    whiteSpace: "nowrap",
  },
  headerButton: {
    position: "absolute",
    top: 20,
    right: 100,
  },
};

let injects;
const InjectStyles = {
  minLgPageHeader: [
    {
      boxSizing: "border-box",
      padding: "0 15px",
      overflow: "visible !important",
    },
    [min.lg, ".page-header"],
  ],
  minLgPageHeaderButton: [
    {
      display: "block !important",
    },
    [min.lg, ".page-header .header-button"],
  ],
};
