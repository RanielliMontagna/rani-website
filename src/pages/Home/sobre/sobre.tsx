import { ConteudoLanding } from 'components';
import { FiDownload } from 'react-icons/fi';
import * as styled from './sobre.styles';

const Sobre = () => {
  return (
    <styled.Sobre id="sobre">
      <ConteudoLanding
        titulo="Sobre mim"
        texto={
          <>
            Olá, me chamo Ranielli Montagna, mais conhecido como Rani, tenho 20 anos. Hoje sou desenvolvedor front-end,
            usando o framework React e estudo Análise e Desenvolvimento de Sistemas na UPF (Universidade de Passo
            Fundo). Sou apaixonado por tecnologia, desenvolvimento e programação, por isso estou sempre em busca de me
            inovar e evoluir no que faço.
          </>
        }
        imagem="static/svgs/about.svg"
        button={{
          children: 'Baixar CV',
          variant: 'outlined',
          size: 'lg',
          startIcon: <FiDownload />,
        }}
      />
    </styled.Sobre>
  );
};

export default Sobre;
