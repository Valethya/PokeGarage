import { useState, useRef, useEffect } from "react";
import Icons from "../../atoms/icons";
import { Aside } from "../aside";
import { StyledNavBar } from "./styled";

export function NavBar() {
  const [showAside, setShowAside] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <>
      <StyledNavBar show={showNav}>
        <Icons
          handle={() => setShowAside(!showAside)}
          type={"menu"}
          size={"1.5em"}
        />
      </StyledNavBar>

      <Aside onClose={() => setShowAside(false)} show={showAside} />
    </>
  );
}
