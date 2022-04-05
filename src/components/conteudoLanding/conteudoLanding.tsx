import { FC, memo } from 'react';
import { Button, Divider } from 'components';
import * as styled from './conteudoLanding.styles';
import { ButtonProps } from 'components/button/button.types';

interface ConteudoLandingProps {
  titulo: string;
  texto: React.ReactNode;
  imagem?: string;
  button?: ButtonProps;
}

const ConteudoLanding: FC<ConteudoLandingProps> = ({ titulo, texto, imagem, button }) => {
  return (
    <styled.DivConteudo>
      <styled.DivTexto>
        <h1>{titulo}</h1>
        <Divider styles={{ margin: '0px 0px 16px 0px', width: '160px' }} />
        <p style={{ marginBottom: '16px' }}>{texto}</p>
        {button && <Button {...button} />}
      </styled.DivTexto>
      <styled.DivImagem>
        <styled.Imagem src={imagem} alt={imagem} />
      </styled.DivImagem>
    </styled.DivConteudo>
  );
};

export default memo(ConteudoLanding);
