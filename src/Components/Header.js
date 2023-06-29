import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, SetBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src ="/images/logo.svg" alt =""/>
      </a>
      <Menu>
        {cars && cars.map((car,index) => (
          <p key={index}><a href="#">{car}</a></p>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustMenu onClick = {() => SetBurgerStatus(true)}>
          <FontAwesomeIcon icon={faBars} />
        </CustMenu>
      </RightMenu>
      <BurgerNav show= {burgerStatus}>
        <CloseWrapper>
          <div onClick = {() => SetBurgerStatus(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </CloseWrapper>
        {cars && cars.map((car,index) => (
          <li key={index}><a href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Demo Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Find Us</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  algin-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

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

  @media (max-width: 768px) {
    display: none;
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

const CustMenu = styled.div`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;  
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    cursor: pointer;
  }
`