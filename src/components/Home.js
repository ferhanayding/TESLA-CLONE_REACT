import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  overflow: hidden;
`;

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exist inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exist inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exist inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        backgroundImg="model-x.jpg"
        rightBtnText="Exist inventory"
      />
      <Section
        title="Solar Panels "
        description="Lowest Cost Solar Panels in America"
        leftBtnText="Order Now"
        backgroundImg="solar-panel.jpg"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnText="Order Now"
        backgroundImg="solar-roof.jpg"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        leftBtnText="Shop Now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
};

export default Home;
