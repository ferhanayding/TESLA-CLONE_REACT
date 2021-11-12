import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 60px;
  width: 100vw;
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
  z-index: 1;
`;
const Left = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    display: flex;
    justify-content: flex-start;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  margin-left: 40px;
`;
const Image = styled.img`
  height: 15px;
  width: 110px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Link = styled.a`
  border: none;
  background-color: inherit;
  cursor: pointer;
  margin: 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: #303136;
  padding: 8px 10px;
  letter-spacing: 2px;
  border-radius: 10px;
  @media (max-width: 960px) {
    display: ${(props) => (props.name === "mobile" ? "none" : null)};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 1s ease-in;
  }
`;
const Right = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    display: flex;
    justify-content: flex-end;
  }
`;
const RightContainer = styled.div``;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 19%;
  height: 100vh;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.5s ease-in;
`;
const ExitIconContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  margin: 22px;
`;
const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 1.2em;
  cursor: pointer;
`;
const Ul = styled.ul`
  flex: 2;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
const Li = styled.li`
  margin: 10px 0px;
  text-align: start;
  font-weight: 550;
  cursor: pointer;
  opacity: 0.8;
  padding: 5px;
  padding-left: 10px;
  border-radius: 50px;
  width: 80%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 0.1s ease-in;
  }
`;
// *********************************************************
const Header = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src="/images/logo.svg" />
        </ImageContainer>
      </Left>
      <Center>
        <Link>Model S</Link>
        <Link>Model 3</Link>
        <Link>Model X</Link>
        <Link>Model Y</Link>
        <Link>Solar Roof</Link>
        <Link>Solar Panels</Link>
      </Center>
      <Right>
        <RightContainer>
          <Link name="mobile">Shop</Link>
          <Link name="mobile">Account</Link>
          <Link onClick={() => setMenuState(true)}>Menu</Link>
        </RightContainer>
      </Right>
      <Menu show={menuState}>
        <ExitIconContainer>
          <Button onClick={() => setMenuState(false)}>X</Button>
        </ExitIconContainer>
        <Ul>
          <Li>Existing Inventory</Li>
          <Li>Used Inventory</Li>
          <Li>Test Drive</Li>
          <Li>Cybertruck</Li>
          <Li>Roadster</Li>
          <Li>Semi</Li>
          <Li>Charging</Li>
          <Li>Powerwall</Li>
          <Li>Commercial Energy</Li>
          <Li>Utilities</Li>
          <Li>Find Us</Li>
          <Li>Support</Li>
          <Li>Investor Relotions</Li>
        </Ul>
      </Menu>
    </Container>
  );
};

export default Header;
