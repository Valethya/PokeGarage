import Icons from "../../atoms/icons";
import { StyledContact } from "./styled";
import { useState, useEffect } from "react";

export function Contact() {
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
    <StyledContact>
      <a href="https://api.whatsapp.com/send?phone=56952420131">
        <Icons type={"wtsp"} />
      </a>
    </StyledContact>
  );
}
