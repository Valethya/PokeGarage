import { Children } from "react";
import Icons from "../icons";
import { StyledBadge } from "./styled";

export default function Badge({ children }) {
  return (
    <StyledBadge>
      <Icons type={"sale"} />
      {children}
    </StyledBadge>
  );
}
