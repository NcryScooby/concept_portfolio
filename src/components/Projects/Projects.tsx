import { Container } from "./style";
import ecoreweb from "../../assets/ecoreweb.png";
import rektr from "../../assets/rektr.png";
import eShop from "../../assets/eShop.png";
import CardMUI from "../CardMUI/CardMUI";

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
          <CardMUI
            image={ecoreweb}
            title={"Ecore Web"}
            description={"Complete project made for the Ecore Group."}
            url={"https://ecoreweb.com.br"}
          />
          <CardMUI
            image={rektr}
            title={"Rektr"}
            description={"A football app made with React, node and MySQL."}
            url={"https://github.com/NcryScooby/soccer_client"}
          />
          <CardMUI
            image={eShop}
            title={"eShop"}
            description={"An e-commerce made with React, node and MongoDB."}
            url={"https://github.com/NcryScooby/eShopReact"}
          />
        </div>
      </Container>
    </>
  );
};

export default Projects;
