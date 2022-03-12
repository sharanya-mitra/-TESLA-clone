import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        image="/images/model--3.jfif"
        btnleft="Coustom Order"
        btnright="Existing inventory"
        textdown="Order Online for "
        textdown2="Touchless Delivery"
      />
      <Section
        title="Model Y"
        image="/images/model--y.jfif"
        btnleft="Coustom Order"
        btnright="Existing inventory"
        textdown="Order Online for "
        textdown2="Touchless Delivery"
      />
      <Section
        title="Model S"
        image="/images/model--s.jfif"
        btnleft="Coustom Order"
        btnright="Existing inventory"
        textdown="Order Online for "
        textdown2="Touchless Delivery"
      />
      <Section
        title="Model X"
        image="/images/model--x.jfif"
        btnleft="Coustom Order"
        btnright="Existing inventory"
        textdown="Order Online for "
        textdown2="Touchless Delivery"
      />
      <Section
        title="Solar Roof"
        image="/images/solar-roof.jpg"
        btnleft="Order now"
        btnright="Learn More"
        textdown="Produce Clean Energy From Your Roof"
        textdown2=""
      />
      <Section
      title="Accessories"
      image="/images/accessories.jpg"
      btnleft="Shop now"
      btnright=""
      textdown=""
      textdown2=""
      />
      
    </Container>
  );
}
export default Home;

const Container = styled.div`
  height: 100vh;
`;
