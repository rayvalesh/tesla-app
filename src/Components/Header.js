import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <a>
        <img src ="/images/logo.svg" alt =""/>
      </a>
      <Menu>
        <p><a href="#"> Model S </a></p>
        <p><a href="#"> Model 3 </a></p>
        <p><a href="#"> Model X </a></p>
        <p><a href="#"> Model Y </a></p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        {/* <CustomMenu /> */}
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  algin-items: center;
  padding: 20px 0;
  top: 0;
  left: 0;
  right: 0;

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: nowrap;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

// const CustomMenu = styled(MenuIcon)`
//   cursor: pointer;
// `