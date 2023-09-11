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

  padding: 1em;
  @media only screen and (min-width: 768px) {
    width: 40%;
    font-size: 12px;
    gap: 1em;
  }
  @media only screen and (min-width: 960px) {
    width: 35%;
    font-size: 16px;
  }
`;
export const StyledImage = styled.div`
  max-width: 100px;
  margin-bottom: 3em;
  @media only screen and (min-width: 768px) {
    max-width: 120px;
  }
  @media only screen and (min-width: 960px) {
    max-width: 130px;
  }
`;
