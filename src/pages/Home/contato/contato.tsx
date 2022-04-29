import { Divider, Typography } from 'components';
import { DivContato, DivInterna, DivCards } from './contato.styles';
import { dadosCards } from './contato.static';
import CardContato from './cardContato/cardContato';

const Contato = () => {
  return (
    <DivContato id="contato">
      <DivInterna>
        <Typography size="xl" weight="bold">
          Contato
        </Typography>
        <Divider styles={{ width: '115px' }} />
        <DivCards>
          {dadosCards.map((dados) => (
            <CardContato key={dados.titulo} {...dados} />
          ))}
        </DivCards>
      </DivInterna>
    </DivContato>
  );
};

export default Contato;
