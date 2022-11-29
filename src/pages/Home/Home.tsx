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
        <span>
          <Header />
          <Introduction />
        </span>
        <About />
        <Projects />
        <SendMessage />
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
