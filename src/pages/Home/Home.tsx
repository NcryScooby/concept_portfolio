import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import { Grid } from "./style";

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
      </Grid>
    </>
  );
};

export default Home;
