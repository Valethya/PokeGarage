import styled, { css } from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) =>
    props.show ? "rgba(243, 243, 243, 0.44)" : "#f3f3f3"};
  padding: 0.5em;
  position: fixed;
  z-index: 9000;
  top: 2.5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.8s ease-in-out, transform 0.5s ease-in-out;
  transform: translateY(
    ${(props) => (props.show ? "calc(100% +2.5em)" : "-2.5em")}
  );
  @media only screen and (min-width: 768px) {
    top: 2.5em;
  }
`;

export const StyledContentFilter = styled.div`
  gap: 1.5em;
  display: flex;
  justify-content: center;
  width: 90%;
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 960px) {
    width: 60%;
  }
`;
