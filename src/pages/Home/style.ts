import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 800px);
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  section {
    scroll-snap-align: start;
    height: 100vh;
  }

  .five {
    display: flex;
  }
`;
