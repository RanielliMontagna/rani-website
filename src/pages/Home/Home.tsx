import * as styled from './Home.styles';

import TitleBar from './titleBar/titleBar';
import Intro from './intro/intro';
import Sobre from './sobre/sobre';
import Habilidades from './habilidades/habilidades';
import Footer from './footer/footer';
import Contato from './contato/contato';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar />
      <Intro />
      <Sobre />
      <Habilidades />
      <Contato />
      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
