import { Divider, Typography } from 'components';
import { DivContato, DivInterna, DivCards } from './contato.styles';
import { dadosCards } from './contato.static';
import CardContato from './cardContato/cardContato';

const Contato = () => {
  return (
    <DivContato>
      <DivInterna data-aos="fade-up" data-aos-duration="1500">
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
