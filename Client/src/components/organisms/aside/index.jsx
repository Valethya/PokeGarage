import { Link } from "react-router-dom";
import { StyledAside, StyledClose } from "./styled";
import Icons from "../../atoms/icons";
import { useEffect, useRef } from "react";
import { capitalizar, pluralizar } from "../../../utils";

export function Aside({ onClose, show }) {
  const pages = ["estadio", "objeto", "pokemon", "partidario", "herramienta"];
  const asideRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  function handleActive(event) {
    const target = event.target;
    const activeElement = document.querySelector("#active");
    console.log(activeElement);
    if (activeElement) {
      activeElement.removeAttribute("id");
    }
    target.id += "active";
  }
  return (
    <StyledAside ref={asideRef} show={show}>
      <StyledClose>
        <Icons handle={onClose} type={"close"} />
      </StyledClose>
      <ul>
        <li key={"home"} onClick={handleActive}>
          <Link to={`/`}>
            <Icons type={"arrowRight"} />
            {"Inicio"}
          </Link>
        </li>
        {pages.map((page) => {
          return (
            <li key={page} onClick={handleActive}>
              <Link to={`/${page}`}>
                <Icons type={"arrowRight"} />
                {pluralizar(page)}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledAside>
  );
}
