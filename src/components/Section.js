import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({ title, image, btnleft, btnright, textdown,textdown2 }) {
  return (
    <Wrap bgImage={image}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{textdown}<a href="">{textdown2}</a>
        </p>
      </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left> <RightButton>{btnleft}</RightButton></Fade>
          {btnright && <Fade right> <LeftButton>{btnright}</LeftButton></Fade>}
          
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;


const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  `;
const ItemText = styled.div`
  padding-top: 17vh;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }
  a{
    text-decoration: underline;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const RightButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 100px;
  cursor: pointer;
  margin: 8px;
  font-weight: bold;
`;
const LeftButton = styled(RightButton)`
  background-color: rgba(255, 255, 255, 0.61);
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animationDown infinite 1.5s;
`;
const Buttons = styled.div``;
