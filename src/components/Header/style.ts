import styled from "styled-components";

export const Container = styled.header`
  width: 1440px;
  margin: auto;
  padding: 48px 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }

  li {
    cursor: pointer;
  }
`;
