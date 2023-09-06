import styled, { css } from "styled-components";

export const StyledFooter = styled.div`
  height: 10em;
  width: 100%;
  background-color: #f3f3f3;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  padding: 1em;
  position: absolute;
  bottom: 0;
  padding: 1em;
  span {
    font-size: 30px;
    color: #363535;
    transition: color 0.5s;
  }
  span:hover {
    color: #de5e4f;
  }
  @media only screen and (min-width: 768px) {
    height: 8em;
    display: flex;
    flex-direction: row;
  }
  @media only screen and (min-width: 960px) {
  }
`;
export const StyledUlFooter = styled.ul`
  display: flex;

  align-items: flex-start;
  flex-direction: row;
  gap: 1em;
  display: flex;
  align-items: flex-start;
  span {
    font-size: 10px;
    color: #de5e4f;
  }
  li {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
  @media only screen and (min-width: 960px) {
  }
`;
export const StyledContentUl = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  width: 50%;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media only screen and (min-width: 960px) {
  }
`;
