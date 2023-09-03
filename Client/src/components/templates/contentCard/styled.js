import styled, { css } from "styled-components";

export const StyledContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 10em;
  position: relative;
  /* margin-bottom: 8em; */
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 960px) {
    width: 60%;
  }
`;
