import { Container } from "./style";
import illustration2 from "../../assets/illustration2.svg";
import effect3 from "../../assets/effect3.svg";
import effect4 from "../../assets/effect4.svg";
import effect5 from "../../assets/effect5.svg";
import effect6 from "../../assets/effect6.svg";
import effect7 from "../../assets/effect7.svg";

const About = () => {
  return (
    <>
      <Container>
        <div>
          <img src={effect4} alt="effect4" id="effect4" />
          <img src={effect5} alt="effect5" id="effect5" />
          <img src={effect6} alt="effect6" id="effect6" />
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quisquam necessitatibus. Odit libero maiores eveniet error modi. Qui
            minima numquam, doloribus incidunt, reprehenderit a voluptas velit
            eos eligendi, tenetur ad.
          </p>
        </div>
        <div>
          <img src={illustration2} alt="illustration" id="illustration" />
          <img src={effect3} alt="effect3" id="effect3" />
          <img src={effect7} alt="effect7" id="effect7" />
        </div>
      </Container>
    </>
  );
};

export default About;
