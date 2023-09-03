import Titles from "../../atoms/titles";
import { StyledDetails, StyledText } from "./styled";

export default function Details({ text, children }) {
  return (
    <StyledDetails>
      <Titles text={text} level={"h4"} />
      <StyledText>{children}</StyledText>
    </StyledDetails>
  );
}
