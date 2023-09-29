import styled from "styled-components";

export const StyledDetails = styled.div`
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Número de líneas máximo */
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-left: 1em;
    margin-right: 1em;
    color: #363535;
    &:hover {
      font-size: 80%;
    }
    @media only screen and (min-width: 500px) {
      h4 {
        &:hover {
          font-size: 14px;
        }
      }
    }
  }
`;
export const StyledText = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: auto;
  padding: 0.5em;
  span {
    margin: 0;
    font-size: 125%;
    color: #de5e4f;
  }
  strike {
    color: #363535;
  }
`;
