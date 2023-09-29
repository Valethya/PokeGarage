import { useState } from "react";
import { formatCurrencyCLP } from "../../../utils";
import Badge from "../../atoms/badge";
import { Image } from "../../atoms/image";
import Details from "../../molecules/details";
import { StyledCard, StyledCardShadow, StyledImageCard } from "./styled";

export default function Card({ data }) {
  return (
    <StyledCard>
      <StyledCardShadow>
        <StyledImageCard>
          {data.discount > 0 && <Badge>{data.discount}%</Badge>}
          <Image src={data.image} name={data.title} />
        </StyledImageCard>

        <Details text={data.name}>
          {data.discount > 0 ? (
            <strike>{formatCurrencyCLP(data.price)}</strike>
          ) : (
            <span>{formatCurrencyCLP(data.finalPrice)}</span>
          )}
          {data.discount > 0 && (
            <span>{formatCurrencyCLP(data.finalPrice)}</span>
          )}
        </Details>
      </StyledCardShadow>
    </StyledCard>
  );
}
