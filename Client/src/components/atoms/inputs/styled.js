import styled, { css } from "styled-components";
import Icons from "../icons";

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  text-align: ${(props) => (props.type == "text" ? "center" : "center")};
`;
export const StyledInputIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: white;
  border-radius: 100px;
  padding: 0.4em;
  padding-left: 1em;
  height: fit-content;

  margin: 5px;
  &:hover {
    margin: -5px;
    margin-left: 5px;
    border: 10px solid #de5e4f;
    border-style: double;
  }
`;
