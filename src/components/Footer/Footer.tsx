import { Container } from "../Footer/style";
import home from "../../assets/home.svg";
import phone from "../../assets/phone.svg";
import user from "../../assets/user.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="list">
          <ul>
            <li>
              <img src={home} alt="home" id="home" />
              Home
            </li>
            <li>
              <img src={phone} alt="phone" id="phone" />
              About me
            </li>
            <li>
              <img src={user} alt="user" id="user" />
              Contact
            </li>
          </ul>
        </div>
        <div className="network">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/FabricioScoooby/"
                target="_blank"
              >
                <img src={facebook} alt="facebook" id="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/notrealscooby/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" id="instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/NotRealScooby" target="_blank">
                <img src={twitter} alt="twitter" id="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={youtube} alt="youtube" id="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Footer;
