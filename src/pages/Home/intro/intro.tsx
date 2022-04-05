import { FiArrowDown } from 'react-icons/fi';
import * as styled from './intro.styles';

const Intro = () => {
  return (
    <styled.Intro id="inicio">
      <styled.Titulo>
        <span> Olá, eu sou</span> <span className="primaria">Ranielli Montagna</span>
      </styled.Titulo>
      <styled.Descricao>Bem vindos ao meu site, aqui você vai encontrar mais informações sobre mim.</styled.Descricao>
      <styled.DivArrow>
        <a href="#sobre" style={{ color: 'inherit' }}>
          <styled.SaibaMais>
            <FiArrowDown size={32} />
          </styled.SaibaMais>
        </a>
      </styled.DivArrow>
    </styled.Intro>
  );
};

export default Intro;
