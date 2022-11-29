import styled from "styled-components";

export const Container = styled.footer`
  width: 1440px;
  margin: auto;
  padding: 48px 96px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .list {
    ul {
      display: flex;
      gap: 48px;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
  }

  .network {
    ul {
      display: flex;
      gap: 24px;
    }
  }
`;
