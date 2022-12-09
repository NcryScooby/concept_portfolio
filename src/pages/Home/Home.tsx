import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import { Grid } from "./style";
import SendMessage from "../../components/SendMessage/SendMessage";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Grid>
        <section className="one">
          <Header />
          <Introduction />
        </section>
        <section className="two">
          <About />
        </section>
        <section className="three">
          <Projects />
        </section>
        <section className="four">
          <SendMessage />
        </section>
        <section className="five">
          <Footer />
        </section>
      </Grid>
    </>
  );
};

export default Home;
