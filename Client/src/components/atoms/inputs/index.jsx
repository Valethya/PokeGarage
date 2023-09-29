import { useEffect } from "react";
import Icons from "../icons";
import { StyledInput, StyledInputIcons } from "./styled";
import { VariablesAreInputTypesRule } from "graphql";

export function Input({ type, label, icon, handle, click, change, value }) {
  return (
    <>
      {label ? (
        <label>
          {label}
          <StyledInput type={type} onKeyDown={handle} />
          {/* <Icons type={icon} /> */}
        </label>
      ) : (
        <StyledInputIcons>
          <StyledInput
            type={type}
            onKeyDown={handle}
            onChange={change}
            value={value}
          />
          <Icons type={icon} handle={click} />
        </StyledInputIcons>
      )}
    </>
  );
}
