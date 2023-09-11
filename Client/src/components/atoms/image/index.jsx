import { StyledImg, StyledSrc } from "./styled";

export function Image({ src }) {
  let JPG = src.replace(/\.webp/g, ".jpg");
  return (
    <picture>
      <StyledSrc type="image/webp" srcSet={src} />

      <StyledImg loading={"lazy"} src={JPG} />
    </picture>
  );
}
