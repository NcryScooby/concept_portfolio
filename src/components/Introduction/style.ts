import styled from "styled-components";
import downloadIcon from "../../assets/download.svg";

export const Container = styled.main`
  width: 1440px;
  margin: 0 auto;
  padding: 20px 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  div {
    #effect1 {
      position: absolute;
      top: 220px;
      left: 80px;
    }

    #effect2 {
      position: absolute;
      bottom: 50px;
      z-index: -1;
    }

    #download-icon {
      width: 16px;
      height: 16px;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        padding: 15px 20px;
        border-radius: 4px;
        border: 0px;
        font-size: 1rem;
      }

      .button-1 {
        background-color: #00adb5;
        color: #fff;

        &:hover {
          background-color: #00b8c3;
        }
      }

      .button-2 {
        display: flex;
        align-items: center;
        background-color: #393e46;
        color: #fff;
        gap: 0.5rem;

        &:hover {
          background-color: #4e525b;
        }
      }

      .button-2::after {
        display: inline-block;
        height: 16px;
        width: 16px;
        content: "";
        background-image: url(${downloadIcon});
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }

  h1 {
    font-size: 96px;
    font-weight: bold;
    max-width: 10ch;
    line-height: 96px;
    strong {
      color: #00adb5;
    }
  }
`;
