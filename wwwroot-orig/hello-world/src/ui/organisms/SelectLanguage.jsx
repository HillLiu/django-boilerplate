import React, { PureComponent } from "react";
import { Section, update } from "reshow";
import { Menu, Item } from "react-atomic-molecule";
import get from "get-object-value";
import getCookie from "get-cookie";
import { Dropdown } from "organism-react-navigation";
import { ajaxDispatch } from "organism-react-ajax";
import ini from "parse-ini-string";
import { nest } from "object-nested";

const keys = Object.keys;

class Body extends PureComponent {
  handleClick(itemKey) {
    const { options } = this.props;
    ajaxDispatch({
      type: "ajaxPost",
      params: {
        url: "/i18n/setlang/",
        headers: { "X-CSRFToken": getCookie("csrftoken") },
        query: {
          language: get(options, ["key", itemKey]),
          next: "/conf/",
        },
        callback: (json, text) => {
          const configs = nest(ini(text), "_");
          update(configs);
        },
      },
    });
  }

  render() {
    const { options, current } = this.props;
    let thisCurrent = current;
    return (
      <div style={Styles.dropdown}>
        <Dropdown
          titleStyle={Styles.dropdownTitle}
          list={
            <Menu>
              {keys(get(options, ["text"], [])).map((key) => {
                const text = get(options, ["text", key]);
                if (current === get(options, ["key", key])) {
                  thisCurrent = text;
                }
                return (
                  <Item key={key} onClick={this.handleClick.bind(this, key)}>
                    {text}
                  </Item>
                );
              })}
            </Menu>
          }
        >
          {thisCurrent}
        </Dropdown>
      </div>
    );
  }
}

const SelectLanguage = () => (
  <Section name="lang">
    <Body />
  </Section>
);

export default SelectLanguage;

const Styles = {
  dropdown: {
    border: "1px solid #0d1650",
    borderRadius: 15,
  },
  dropdownTitle: {
    padding: "5px 15px",
    color: "#121555",
  },
};
