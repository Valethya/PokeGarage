import Icons from "../../atoms/icons";
import Titles from "../../atoms/titles";
import { Announce } from "../announce";
import { StyledContentUl, StyledFooter, StyledUlFooter } from "./styled";

export function Footer() {
  return (
    <StyledFooter>
      <Announce />
      <StyledContentUl>
        <Titles text={"Entregamos en:"} level={"h4"} />
        <StyledUlFooter>
          <li>
            <Icons type={"arrowRight"} />
            Metro Gruta de Lourdes
          </li>
          <li>
            <Icons type={"arrowRight"} />
            Estacion Central
          </li>
          <li>
            <Icons type={"arrowRight"} />
            Mall Parque Arauco
          </li>
        </StyledUlFooter>
      </StyledContentUl>
    </StyledFooter>
  );
}
