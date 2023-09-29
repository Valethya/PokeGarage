import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  width: calc(100% / 3);
  transition: transform 0.5s;
  @media only screen and (min-width: 768px) {
    width: calc(100% / 4);
  }
  &:hover {
    transform: translateY(-1%);
  }
`;
export const StyledCardShadow = styled.div`
  background-color: #f3f3f3;
  padding: 0.2em;
  margin: 0.6em;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledImageCard = styled.div`
  position: relative;
`;
