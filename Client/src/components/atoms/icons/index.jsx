import { BsSuitHeartFill, BsWhatsapp, BsSearch } from "react-icons/Bs";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/Bi";
import { StyledIcon } from "./styled";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/Ai";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdDiscount,
} from "react-icons/Md";
export default function Icons({ type, color, size, handle }) {
  const Type = {
    search: <BsSearch color={color} size={size} />,
    heart: <BsSuitHeartFill color={color} size={size} />,
    arrowDown: <BiSolidDownArrow color={color} size={size} />,
    arrowRight: <BiSolidRightArrow color={color} size={size} />,
    menu: <AiOutlineMenu color={color} size={size} onClick={handle} />,
    close: <AiOutlineClose color={color} size={size} onClick={handle} />,
    next: <MdKeyboardDoubleArrowRight color={color} />,
    prev: <MdKeyboardDoubleArrowLeft color={color} />,
    sale: <MdDiscount color={color} size={size} />,
    wtsp: <BsWhatsapp color={color} size={size} onClick={handle} />,
  };
  return (
    <StyledIcon onClick={handle} type={type}>
      {Type[type]}
    </StyledIcon>
  );
}
