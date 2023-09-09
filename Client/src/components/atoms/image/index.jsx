import { Img } from "./styled";

export function Image({ src }) {
  return <Img loading={"lazy"} src={src} />;
}
