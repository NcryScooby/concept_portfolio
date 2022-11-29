import { Container } from "./style";
import ecoreweb from "../../assets/ecoreweb.png";
import rektr from "../../assets/rektr.png";
import eShop from "../../assets/eShop.png";

const Projects = () => {
  return (
    <>
      <Container>
        <div>
          <h2>
            My recent <span>works</span>
          </h2>
        </div>

        <div className="projects">
          <div>
            <img src={ecoreweb} alt="ecoreweb" id="ecoreweb" />
            <p>
              <a href="https://www.ecoreweb.com.br/" target="_blank">
                Ecore Web
              </a>
            </p>
          </div>
          <div>
            <img src={rektr} alt="rektr" id="rektr" />
            <p>
              <a
                href="https://github.com/NcryScooby/soccer_client"
                target="_blank"
              >
                Rektr
              </a>
            </p>
          </div>
          <div>
            <img src={eShop} alt="eShop" id="eShop" />
            <p>
              <a
                href="https://github.com/NcryScooby/eShopReact"
                target="_blank"
              >
                eShop
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
