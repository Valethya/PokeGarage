import styled, { css } from "styled-components";

export const StyledIcon = styled.span`
  background: ${(props) =>
    props.type === "search" || props.type === "arrowDown"
      ? "#de5e4f"
      : "transparent"};
  display: grid;
  place-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
`;
