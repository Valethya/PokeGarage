import { StyledImg, StyledSrc } from "./styled";

export function Image({ src, name }) {
  let JPG = src.replace(/\.webp/g, ".jpg");
  return (
    <picture>
      <StyledSrc type="image/webp" srcSet={src} alt={name} />

      <StyledImg loading={"lazy"} src={JPG} alt={name} />
    </picture>
  );
}
