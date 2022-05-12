import { useEffect } from 'react';
import * as styled from './Home.styles';

import TitleBar from './titleBar/titleBar';
import Intro from './intro/intro';
import Sobre from './sobre/sobre';
import Habilidades from './habilidades/habilidades';
import Footer from './footer/footer';
import Contato from './contato/contato';
import Estudos from './estudos/estudos';
import Experiencia from './experiencia/experiencia';

import { Element, animateScroll } from 'react-scroll';

const LandingPage = () => {
  useEffect(() => {
    animateScroll.scrollTo(1);
    setTimeout(() => {
      animateScroll.scrollToTop();
    }, 0);
  }, []);

  return (
    <styled.Geral id="geral">
      <TitleBar />

      <Element name="intro">
        <Intro />
      </Element>

      <Element name="sobre" style={{ marginBottom: '-40px', paddingBottom: '40px' }}>
        <Sobre />
        <Habilidades />
        <Estudos />
      </Element>
      <Experiencia />

      <Element name="contato" style={{ marginTop: '-500px', paddingTop: '500px' }}>
        <Contato />
      </Element>

      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
