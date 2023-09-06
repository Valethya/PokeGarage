import Titles from "../../atoms/titles";
import { StyledLoader } from "./styled";

export function Loader() {
  return (
    <StyledLoader>
      <Titles level={"h2"} text={"Cargando..."} />
    </StyledLoader>
  );
}
