import { useEffect, useState } from "react";
import { StyledContentFilter, StyledSearchBar } from "./styled";

export function SearchBar({ children }) {
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
    <StyledSearchBar show={showNav}>
      <StyledContentFilter>{children}</StyledContentFilter>
    </StyledSearchBar>
  );
}
