import { DivExterna, DivHabilidades, DivInterna } from './habilidades.styles';
import { Typography } from 'components';
import { useTheme } from 'hooks';
import { dadosHabilidades } from './habilidades.static';
import { useWindowSize } from 'utils';

const Habilidades = () => {
  const { coresNeutras } = useTheme();
  const { width } = useWindowSize();

  return (
    <DivExterna>
      <DivInterna>
        <Typography size="xl" weight="bold">
          Habilidades diferentes, <span style={{ color: '#1087E0' }}>mesma energia</span>
        </Typography>
        <Typography size="md" style={{ textAlign: width < 1000 ? 'justify' : 'center' }}>
          Hoje, minhas habilidades na área estão voltadas para o desenvolvimento de aplicações web, mobile e desktop.
          {width >= 1000 && <br />}
          Para isso os conhecimentos são diversificados, como:
        </Typography>
        <DivHabilidades>
          {dadosHabilidades.map((it) => (
            <Typography
              key={it.nome}
              className={it.class}
              size="xl"
              weight="bold"
              style={{ color: coresNeutras.cinzaClaro }}
            >
              {it.nome}
            </Typography>
          ))}
        </DivHabilidades>
      </DivInterna>
    </DivExterna>
  );
};

export default Habilidades;
