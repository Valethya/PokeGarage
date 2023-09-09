import styled from "styled-components";
export const StyledBadge = styled.span`
  position: absolute;
  background-color: #de5e4f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  border-radius: 25px;
  top: 8%;
  right: -6%;
  font-size: 100%;
  padding-left: 1em;
  padding-right: 1em;
  z-index: 5000;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 960px) {
    font-size: 16px;
  }
`;
