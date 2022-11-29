import { Container, Form, Button } from "./style";
import illustration from "../../assets/illustration3.svg";
import effect8 from "../../assets/effect8.svg";
import effect9 from "../../assets/effect9.svg";
import mail from "../../assets/mail.svg";

const SendMessage = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h2>
            Got a project in <span>mind?</span>
          </h2>
          <img src={illustration} alt="illustration" id="illustration" />
          <img src={effect8} alt="effect8" id="effect8" />
        </div>
        <Form>
          <img src={effect9} alt="effect9" id="effect9" />
          <img src={mail} alt="mail" id="mail" />
          <div className="inputs">
            <div>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email">Your e-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="textarea">
            <label htmlFor="message">Your message</label>
            <textarea name="message" id="message" placeholder="Message" />
          </div>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </>
  );
};

export default SendMessage;
