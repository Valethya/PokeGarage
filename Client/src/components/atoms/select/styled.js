import styled, { css } from "styled-components";
export const StyledSelect = styled.div`
  display: flex;
  width: 100%;
  background: white;
  border-radius: 100px;
  padding: 0.4em;
  padding-left: 1em;
  gap: 0.5em;
  justify-content: space-between;
  text-align: center;
  height: fit-content;
  cursor: pointer;
  z-index: 10;
  position: relative;
  margin: 5px;
  p {
    width: 100%;
    margin-left: 5px;
  }
  &:hover {
    margin: -5px;
    margin-left: 5px;
    border: 10px solid #de5e4f;
    border-style: double;
    p {
      margin-left: -5px;
    }
  }
  &:focus-visible {
    margin: -5px;
    margin-left: 5px;
    border: 10px solid #de5e4f;
    border-style: double;
    p {
      margin-left: -5px;
    }
  }
`;
export const StyledLabel = styled.p`
  width: 0;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Número de líneas máximo */
  -webkit-box-orient: vertical;
  overflow: hidden;
  &:active {
    color: #de5e4f;
  }
`;
export const StyledListSelect = styled.ul`
  width: 90%;
  background-color: white;
  border-radius: 10.25px;
  position: absolute;
  top: 3em;
  z-index: 9;
  gap: 0;
  border: 10px solid #de5e4f;
  border-style: double;
`;
export const Styledoption = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;

  span {
    color: transparent;
  }
  &:hover span {
    color: #de5e4f;
  }
  &:active {
    color: #de5e4f;
  }
`;
