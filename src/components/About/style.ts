import styled from "styled-components";

export const Container = styled.section`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 96px;
  position: relative;

  div:first-child {
    display: flex;
    flex-direction: column;
    h2 {
      margin: 0;
      font-weight: bold;
      font-size: 64px;
      span {
        color: #00adb5;
      }
    }
    p {
      margin: 0;
      max-width: 35ch;
      font-weight: 200;
      font-size: 18px;
    }
  }

  div:last-child {
    #effect {
      position: absolute;
      right: 100px;
      top: 100px;
      z-index: -1;
    }
  }
`;
