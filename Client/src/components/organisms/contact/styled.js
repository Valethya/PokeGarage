import styled, { css } from "styled-components";

export const StyledContact = styled.div`
  position: fixed;
  bottom: 5em;
  right: 1em;
  font-size: 30px;
  background-color: #de5e4f;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1em;
  a {
    &:visited {
      color: #f3f3f3;
    }
    &:active {
      color: #f3f3f3;
    }
  }
`;
