import Icons from "../../atoms/icons";
import { StyledBtn, StyledNumberPage, StyledPagination } from "./styled";

function Pagination({ handle, page }) {
  function handlePage(cursor) {
    handle(cursor);
  }

  return (
    <StyledPagination>
      <ul>
        <StyledBtn onClick={() => handlePage(page.prevPage)}>
          <Icons type={"prev"} />
        </StyledBtn>
        <StyledNumberPage>{page.page}</StyledNumberPage>
        <StyledBtn onClick={() => handlePage(page.nextPage)}>
          <Icons type={"next"} />
        </StyledBtn>
      </ul>
    </StyledPagination>
  );
}
export default Pagination;
