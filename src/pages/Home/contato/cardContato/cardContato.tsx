import { Typography } from 'components';
import { DivCardContato } from './cardContato.styles';
import { CardContatoProps } from './cardContato.types';

const CardContato = ({ conteudo, href, icone, titulo }: CardContatoProps) => {
  return (
    <DivCardContato onClick={() => window.open(href, '_blank')}>
      <div>{icone}</div>
      <div>
        <Typography size="lg" weight="bold">
          {titulo}
        </Typography>
      </div>
      <div>{conteudo}</div>
    </DivCardContato>
  );
};

export default CardContato;
