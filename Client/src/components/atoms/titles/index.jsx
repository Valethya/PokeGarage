import { H1, H2, H3, H4 } from "./style.js";
export default function Titles({ level, text, subtitle }) {
  const Level = {
    h1: <H1 level={level}>{text}</H1>,
    h2: <H2>{text}</H2>,
    h3: <H3>{text}</H3>,
    h4: <H4>{text}</H4>,
  };
  return (
    <>
      {Level[level]}
      {subtitle && <H3>{subtitle}</H3>}
    </>
  );
}
