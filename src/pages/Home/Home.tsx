import * as styled from './Home.styles';

import TitleBar from './titleBar/titleBar';
import Intro from './intro/intro';
import Sobre from './sobre/sobre';
import Dev from './dev/dev';
import Footer from './footer/footer';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar />
      <Intro />
      <Sobre />
      <Dev />
      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
