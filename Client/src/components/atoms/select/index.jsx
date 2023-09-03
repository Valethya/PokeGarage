import Icons from "../icons";
import {
  StyledLabel,
  StyledListSelect,
  StyledSelect,
  Styledoption,
} from "./styled";
import { useState, useRef, useEffect } from "react";

export function Select({ options, onSelect }) {
  const [hoveredPage, setHoveredPage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [show, setShow] = useState(false);
  const selectRef = useRef(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };
  function handleShow() {
    setShow(!show);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      // Si se hace clic fuera del componente Select, cierra el menú
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    // Agregar el listener cuando el componente monta
    document.addEventListener("mousedown", handleClickOutside);

    // Remover el listener cuando el componente desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <StyledSelect ref={selectRef}>
      <StyledLabel onClick={handleShow}>
        {selectedOption ? selectedOption.label : "Seleccione una opción"}
      </StyledLabel>
      <Icons type="arrowDown" handle={handleShow} />
      {show === true && (
        <StyledListSelect>
          {options.map((option) => (
            <Styledoption
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              onMouseEnter={() => setHoveredPage(option)}
              onMouseLeave={() => setHoveredPage(null)}
              onTouchStart={() => setHoveredPage(option)}
              onTouchEnd={() => setHoveredPage(null)}
            >
              <Icons type={"arrowRight"} />
              {option.label}
            </Styledoption>
          ))}
        </StyledListSelect>
      )}
    </StyledSelect>
  );
}
