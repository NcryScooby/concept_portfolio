import { Container } from "./style";
import effect1 from "../../assets/effect1.svg";
import effect2 from "../../assets/effect2.svg";
import illustration from "../../assets/illustration.svg";
import { Link } from "react-router-dom";
import curriculum from "../../assets/curriculum.pdf";

const Introduction = () => {
  const downloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "fabricio_curriculum.pdf";
    link.click();
  };

  return (
    <>
      <Container>
        <div>
          <img src={effect1} alt="effect1" id="effect1" />
          <h1>
            FULL STACK <strong>DEVELOPER</strong>
          </h1>
          <div className="buttons">
            <Link to="#contact">
              <button className="button-1">Hire Me</button>
            </Link>

            <button className="button-2" onClick={downloadCurriculum}>
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img src={effect2} alt="effect2" id="effect2" />
          <img src={illustration} alt="illustration" id="illustration" />
        </div>
      </Container>
    </>
  );
};

export default Introduction;
