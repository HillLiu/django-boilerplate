import React, { PureComponent } from "react";
import { Section } from "reshow";
import { Menu, Item } from "react-atomic-molecule";
import get from "get-object-value";
import { Dropdown } from "organism-react-navigation";
import getConfig from "../../getConfig";

const keys = Object.keys;

class Body extends PureComponent {
  handleClick(itemKey) {
    const { options } = this.props;
    getConfig(get(options, ["key", itemKey]));
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
