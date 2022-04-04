import { Footer, TitleBar } from 'components';
import * as styled from './Home.styles';

import Intro from './intro/intro';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar rota="home" />
      <Intro />
      <div style={{ display: 'flex', height: 'calc(100% - 170px)' }} />
      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
