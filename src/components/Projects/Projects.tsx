import { Container } from "./style";
import ecoreweb from "../../assets/ecoreweb.png";
import rektr from "../../assets/rektr.png";

const Projects = () => {
  return (
    <>
      <Container>
        <div>
          <h2>
            My recent <span>works</span>
          </h2>
        </div>

        <div>
          <div>
            <img src={ecoreweb} alt="ecoreweb" id="ecoreweb" />
          </div>
          <div>
            <img src={rektr} alt="rektr" id="rektr" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
