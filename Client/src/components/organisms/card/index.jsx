import { formatCurrencyCLP } from "../../../utils";
import Badge from "../../atoms/badge";
import { Image } from "../../atoms/image";
import Details from "../../molecules/details";
import { StyledCard, StyledCardShadow, StyledImageCard } from "./styled";

export default function Card({ data }) {
  function sale() {
    const discount = data.discount;
    const price = data.price;
    return price - (discount * price) / 100;
  }
  return (
    <StyledCard>
      <StyledCardShadow>
        <StyledImageCard>
          {data.discount > 0 && <Badge>{data.discount}%</Badge>}
          <Image src={data.image} />
        </StyledImageCard>

        <Details text={data.name}>
          {data.discount > 0 ? (
            <strike>{formatCurrencyCLP(data.price)}</strike>
          ) : (
            <span>{formatCurrencyCLP(data.price)}</span>
          )}
          {data.discount > 0 && <span>{formatCurrencyCLP(sale())}</span>}
        </Details>
      </StyledCardShadow>
    </StyledCard>
  );
}
