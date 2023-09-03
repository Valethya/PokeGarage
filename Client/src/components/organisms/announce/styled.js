import styled, { css } from "styled-components";

export const StyledAnnounce = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  border: 10px solid #de5e4f;
  border-style: double;
  border-radius: 10.25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 1em;
  @media only screen and (min-width: 768px) {
    width: 30%;
    height: 100%;
  }
  @media only screen and (min-width: 960px) {
  }
`;
export const StyledImage = styled.div`
  width: 18em;
  margin-bottom: 3em;
`;
