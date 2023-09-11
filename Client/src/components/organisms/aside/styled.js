import styled, { css } from "styled-components";

export const StyledAside = styled.aside`
  border: 10px solid #de5e4f;
  border-style: double;
  height: 100%;
  width: min-content;
  position: fixed;
  left: 0;
  background-color: #f3f3f3;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  display: block;
  z-index: 10000;
  ul {
    margin-top: 2em;
    padding-right: 2em;
  }
  li {
    width: 100%;
    font-size: 120%;
    a {
      color: #363535;
    }
    span {
      color: transparent;
    }
    &:hover span {
      color: #de5e4f;
    }
  }
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: ${({ show }) => {
    return show ? "translateX(0)" : "translateX(-100%)";
  }};
  @media only screen and (min-width: 768px) {
    padding-left: 2em;
  }
  @media only screen and (min-width: 960px) {
  }
`;
export const StyledClose = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    color: #363535;
    transition: color 0.5s;
  }
  span:hover {
    color: #de5e4f;
  }
`;
