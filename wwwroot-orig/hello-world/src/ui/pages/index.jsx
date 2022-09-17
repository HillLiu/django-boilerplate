import React, { PureComponent } from "react";
import Reshow, { ReshowMessage } from "reshow";
import { PopupPool } from "organism-react-popup";
import { PageLoadProgressHandler } from "organism-react-progress";

import Home from "../pages/Home";
import Register from "../pages/Register";
import getLanguage from "../../getLanguage";
import getConfig from "../../getConfig";

const themes = {
  Home,
  Register,
};

class Index extends PureComponent {
  componentDidMount() {
    getConfig(getLanguage());
  }

  render() {
    const props = this.props;
    return (
      <div>
        <Reshow immutable={true} themes={themes} {...props} />
        <PopupPool />
        <PageLoadProgressHandler ajax zIndex={1000} />
        <ReshowMessage defaultAlertProps={{ position: "bottom" }} />
      </div>
    );
  }
}

export default Index;
