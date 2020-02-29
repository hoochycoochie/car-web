import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Responsive, Button, Menu } from "semantic-ui-react";
import { LOGIN_PATH, ROOT_PATH } from "../utils/static_constants";

export default class NavBar extends Component {
  state = { active: "home" };

  handleItemClick = (e, { name }) => this.setState({ active: name });

  render() {
    const { active } = this.state;

    return (
      <Menu>
        <Menu.Item
          as={Link}
          to={ROOT_PATH}
          active={active === "home"}
          content="Home"
          name="home"
          onClick={this.handleItemClick}
        />
        <Menu.Item
         as={Link}
         to={LOGIN_PATH}
          active={active === "messages"}
          content="Messages"
          name="messages"
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Responsive
              {...Responsive.onlyMobile}
              as={Button}
              content="Switch to desktop version"
              icon="desktop"
              labelPosition="left"
            />
            <Responsive
              as={Button}
              content="Switch to mobile version"
              icon="mobile"
              labelPosition="left"
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
