import styled, { css } from "styled-components";

export const StyledNavBar = styled.div`
  padding-left: 1em;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  background-color: #f3f3f3;
  height: 2.5em;
  position: fixed;
  z-index: 9000;
  transition: transform 0.5s ease-in-out;
  transform: translateY(${(props) => (props.show ? "0" : "-100%")});

  span {
    color: #363535;
    transition: color 0.5s;
  }
  span:hover {
    color: #de5e4f;
  }

  @media only screen and (min-width: 768px) {
    height: 2.5em;
  }
  @media only screen and (min-width: 960px) {
  }
`;
