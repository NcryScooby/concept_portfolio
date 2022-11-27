import { Container } from "./style";
import illustration2 from "../../assets/illustration2.svg";
import effect3 from "../../assets/effect3.svg";

const About = () => {
  return (
    <>
      <Container>
        <div>
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
          <img src={illustration2} alt="illustration" />
          <img src={effect3} alt="effect" id="effect" />
        </div>
      </Container>
    </>
  );
};

export default About;
