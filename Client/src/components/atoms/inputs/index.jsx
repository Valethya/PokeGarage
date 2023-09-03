import Icons from "../icons";
import { StyledInput, StyledInputIcons } from "./styled";

export function Input({ type, label, icon, handle, click }) {
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
          <StyledInput type={type} onKeyDown={handle} />
          <Icons type={icon} handle={click} />
        </StyledInputIcons>
      )}
    </>
  );
}
