import styled from "styled-components";
import background from "../../assets/background.svg";

export const Container = styled.section`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 96px;
  position: relative;
  background-image: url(${background});

  h2 {
    margin: 0;
    font-weight: bold;
    font-size: 64px;
    span {
      color: #00adb5;
    }
  }

  div:last-child {
    display: flex;

    gap: 2rem;
    img {
      width: 368px;
      height: 201px;
      border-radius: 12px;
    }
  }
`;
