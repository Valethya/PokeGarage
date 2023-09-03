import styled, { css } from "styled-components";

export const StyledPagination = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 10em;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      font-size: 16px;
    }
  }
`;
export const StyledBtn = styled.li`
  background-color: #f3f3f3;
  text-align: center;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  display: grid;
  place-content: center;
  transition: 0.5s;
  &:hover {
    background-color: #ff7f70;
  }
`;
export const StyledNumberPage = styled.li`
  background-color: #de5e4f;
  height: 2em;
  width: 2em;
  border-radius: 50%;
  display: grid;
  place-content: center;
`;
