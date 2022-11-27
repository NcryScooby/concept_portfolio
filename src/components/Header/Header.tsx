import { Container } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <h1>Fabrício</h1>
        <ul>
          <Link to="#home">
            <li>Home</li>
          </Link>
          <Link to="#about-me">
            <li>About Me</li>
          </Link>
          <Link to="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </Container>
    </>
  );
};

export default Header;
