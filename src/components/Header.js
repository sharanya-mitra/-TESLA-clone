import React, { PureComponent } from "react";
import { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Flag } from "@material-ui/icons";
export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      burgerState: false,
    };
  }
  render() {
    return (
      <Container>
        <Logo>
          {" "}
          <a>
            <img src="/images/logo.svg" alt="logo" class="logo" />
          </a>
        </Logo>
        <Menu>
          <p>
            <a href="">Model S</a>
          </p>
          <p>
            <a href="">Model 3</a>
          </p>
          <p>
            <a href="">Model X</a>
          </p>
          <p>
            <a href="">Model Y</a>
          </p>
          <p>
            <a href="">Solar Roof</a>
          </p>
          <p>
            <a href="">Solar Panels</a>
          </p>
        </Menu>
        <RMenu>
          <p>
            <a href="">Shop</a>
          </p>
          <p>
            <a href="">Account</a>
          </p>
        </RMenu>
        <Menuicon onClick={() => this.setState({ burgerState: true })}>
          <p>
            Menu
          </p>
        </Menuicon>

        <BurgerMenu show={this.state.burgerState}>
          <ConstomCloseIcon
            onClick={() => this.setState({ burgerState: false })}
          >
            <CoustomClose />
          </ConstomCloseIcon>
          <li>
            <a href="">Existing Inventory</a>
          </li>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href=""> Trade-In</a>
          </li>
          <li>
            <a href="">Test Drive</a>
          </li>
          <li>
            <a href="">Cybertruck</a>
          </li>
          <li>
            <a href="">Roadster</a>
          </li>
          <li>
            <a href="">Semi</a>
          </li>
          <li>
            <a href="">Charging</a>
          </li>
          <li>
            <a href="">powerwall</a>
          </li>
          <li>
            <a href="">Commercial Energy</a>
          </li>
          <li>
            <a href="">Utilities</a>
          </li>
          <li>
            <a href="">Find Us</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
        </BurgerMenu>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 40px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 600px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const Logo = styled.div`
  display: flex;
`;
const RMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 600px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    flex-wrap: nowrap;
  }
 
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  transition-duration: 1.1s;
  transform: translateX(${(props) => (props.show ? "0px" : "100%")});
  
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 300px;
  z-index: 16;
  padding: 20px 0px 10px 30px;
  text-align: start;

  li {
    padding: 10px;
    font-weight: 600;
    text-transform: uppercase;
    font-weight: bold;
    text-align: start;
  }
`;
const CoustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const ConstomCloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 30px;
  padding-bottom: 30px;
  z-index: 100;
`;
const Menuicon = styled(RMenu)``;