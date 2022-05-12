import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';
import { TypeWriter } from 'components';
import * as styled from './intro.styles';

const Intro = () => {
  return (
    <styled.Intro>
      <styled.Titulo>
        <span>
          <TypeWriter delay={50} label="Olá, eu sou" />
        </span>
        <span className="primaria">
          <TypeWriter delay={60} pause={1000} label="Ranielli Montagna" />
        </span>
      </styled.Titulo>
      <styled.Descricao>
        <TypeWriter
          pause={2200}
          delay={40}
          label="Bem vindos ao meu site, aqui você vai encontrar mais informações sobre mim."
        />
      </styled.Descricao>
      <styled.DivArrow>
        <a href="#sobre" aria-label="Sobre" style={{ color: 'inherit' }}>
          <Link to="sobre">
            <styled.SaibaMais>
              <FiArrowDown size={32} />
            </styled.SaibaMais>
          </Link>
        </a>
      </styled.DivArrow>
    </styled.Intro>
  );
};

export default Intro;
