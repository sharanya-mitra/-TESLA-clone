import React, { PureComponent } from 'react'
import styled from 'styled-components'

export class Header extends PureComponent {
  render() {
    return (
        <Container>
       <Logo> <a>
        <img src="/images/logo.svg" alt="logo"class="logo"/>
        </a></Logo>
        <Menu>
            <p><a href='#'>Model S</a></p>
            <p><a href='#'>Model 3</a></p>
            <p><a href='#'>Model X</a></p>
            <p><a href='#'>Model Y</a></p>
            <p><a href='#'>Solar Roof</a></p>
            <p><a href='#'>Solar Panels</a></p>
            </Menu>
            <RMenu>
            <p><a href='#'>Shop</a></p>
            <p><a href='#'>Account</a></p>
            <p><a href='#'>Menu</a></p>
            </RMenu>
        </Container>
    )
  }
}

export default Header

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

`

const Menu = styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: center;

p{
    font-weight:600px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 10px;
    flex-wrap: nowrap;
}

`
const Logo = styled.div`
display: flex;
`
const RMenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
    font-weight:600px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    flex-wrap: nowrap;
}
`
