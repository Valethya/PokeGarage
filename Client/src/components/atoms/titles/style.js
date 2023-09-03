import styled, { css } from "styled-components";
const headerSize = {
  h1: "3em",
  h2: "2.5em",
  h3: "2em",
  h4: "1.5em",
};
const common = css`
  margin: 0;
`;
export const H1 = styled.h1`
  ${common}
  font-size: ${(props) => headerSize[props.level]};
`;
export const H2 = styled.h2`
  ${common}
  font-size: ${(props) => headerSize[props.level]};
`;
export const H3 = styled.h3`
  ${common}
  font-size: ${(props) => headerSize[props.level]};
`;
export const H4 = styled.h4`
  ${common}
  font-size: ${(props) => headerSize[props.level]};
`;
