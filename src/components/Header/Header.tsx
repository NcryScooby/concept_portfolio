import { Container } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Container>
        <Link to="/">
          <h1>Fabrício</h1>
        </Link>
        <ul>
          <Link to="#home">
            <li>Home</li>
          </Link>
          <li onClick={scrollToAbout}>About Me</li>
          <Link to="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </Container>
    </>
  );
};

export default Header;
