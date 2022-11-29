import styled from "styled-components";

export const Container = styled.section`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0 96px;
  align-items: center;
  position: relative;

  h2 {
    font-size: 64px;
    max-width: 15ch;
    span {
      color: #00adb5;
    }
  }

  .title {
    #illustration {
      margin-left: 200px;
    }
  }

  #effect8 {
    position: absolute;
    top: 450px;
    left: 120px;
  }
`;

export const Form = styled.form`
  position: relative;

  #effect9 {
    position: absolute;
    top: -150px;
    left: 50px;
  }

  #mail {
    position: absolute;
    bottom: -100px;
    right: 50px;
  }

  .inputs {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 4px;
        font-weight: bold;
      }

      input {
        width: 250px;
        height: 40px;
        border-radius: 8px;
        border: 0;
        outline: none;
        background-color: #393e46;
        color: #eeeeee;
        padding: 0 20px;
        opacity: 0.5;
      }

      input::placeholder {
        font-weight: bold;
        color: #eeeeee;
        opacity: 0.5;
      }

      input:focus {
        border: none;
        outline: none;
      }
    }
  }

  .textarea {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    label {
      margin-bottom: 4px;
      font-weight: bold;
    }

    textarea {
      resize: none;
      border: none;
      outline: none;
      background-color: #393e46;
      color: #eeeeee;
      padding: 20px;
      border-radius: 8px;
      height: 200px;
      opacity: 0.5;
      font-family: "Arial", sans-serif;
      font-size: 14px;
    }

    textarea::placeholder {
      color: #eeeeee;
      opacity: 0.5;
      font-weight: bold;
      font-family: "Arial", sans-serif;
      font-size: 13px;
    }
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 250px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  outline: none;
  background-color: #00adb5;
  color: #eeeeee;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #00b8c3;
  }
`;
