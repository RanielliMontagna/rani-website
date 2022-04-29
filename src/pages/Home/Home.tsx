import * as styled from './Home.styles';

import TitleBar from './titleBar/titleBar';
import Intro from './intro/intro';
import Sobre from './sobre/sobre';
import Habilidades from './habilidades/habilidades';
import Footer from './footer/footer';
import Contato from './contato/contato';
import Estudos from './estudos/estudos';
import Experiencia from './experiencia/experiencia';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar />
      <Intro />
      <Sobre />
      <Habilidades />
      <Estudos />
      <Experiencia />
      <Contato />
      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
