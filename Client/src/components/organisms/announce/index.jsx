import { Image } from "../../atoms/image";
import Titles from "../../atoms/titles";
import { StyledAnnounce, StyledImage } from "./styled";

export function Announce() {
  return (
    <>
      <StyledAnnounce>
        <StyledImage>
          <Image src={"img/eevee.png"} />
        </StyledImage>
        <Titles
          level={"h4"}
          text={"Has evolucionado?¡Paga con tus eeveevolutions o cripto!"}
        ></Titles>
      </StyledAnnounce>
    </>
  );
}
