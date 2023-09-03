import { StyledContentCard } from "./styled";
import Card from "../../organisms/card";
import Pagination from "../../molecules/pagination";
import { useCards } from "../../../cards/customHooks";

export default function ContenCard({ variable, page, handle }) {
  const { loading, data, error } = useCards({ ...variable, page: page });
  if (loading) {
    return <h1>cargando....</h1>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const cards = data?.allCards?.payload;

  return (
    <>
      <StyledContentCard>
        {
          <>
            {cards?.map((card) => {
              if (card.stock === true) {
                return <Card data={card} />;
              }
            })}
          </>
        }
      </StyledContentCard>
      <Pagination page={data.allCards} handle={handle} />
    </>
  );
}
