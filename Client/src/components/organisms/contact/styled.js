import styled, { css } from "styled-components";

export const StyledContact = styled.div`
  position: sticky;
  transform: translate(50vw, -5em);
  bottom: -4.5em;
  right: 1em;
  font-size: 30px;
  background-color: #de5e4f;
  border-radius: 50%;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5em;
  z-index: 10000;
  margin-right: 3em;
  a {
    &:visited {
      color: #f3f3f3;
    }
    &:active {
      color: #f3f3f3;
    }
  }
  @media only screen and (min-width: 768px) {
    transform: translate(50vw, -5em);
  }
  @media only screen and (min-width: 960px) {
  }
`;
