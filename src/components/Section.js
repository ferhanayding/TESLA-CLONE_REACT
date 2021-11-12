import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtomItemContainer = styled.div``;
const ButtonGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 100px;
  height: 40px;
  width: 286px;
  border: none;
  margin: 10px;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrapper bgImage={backgroundImg}>
      <ItemText>
        <Fade direction="top" delay={100}>
          <h1 style={{ fontWeight: "700" }}>{title}</h1>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <ButtomItemContainer>
        <Fade delay={100}>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </ButtomItemContainer>
    </Wrapper>
  );
};

export default Section;
