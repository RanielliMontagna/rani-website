import { DivExterna, DivInterna } from './estudos.styles';

import { useWindowSize } from 'utils';
import Item from './item/item';

import { Timeline } from '@mui/lab';

import { GiBlackBook } from 'react-icons/gi';
import { FaReact } from 'react-icons/fa';
import { Divider } from 'components';

const Estudos = () => {
  const { width } = useWindowSize();

  return (
    <DivExterna>
      <DivInterna>
        <div>
          <h1>Estudos</h1>
          <Divider styles={{ margin: '0px 0px 16px 0px', width: '120px' }} />
        </div>

        <Timeline position={width > 530 ? 'alternate' : 'right'}>
          <Item ano="2022" titulo="Inglês Geral" local="Quiron Idiomas - Paraí, RS" icone={<FaReact size={40} />} />
          <Item
            ano="2020"
            local="UPF - Casca, RS"
            titulo="Análise e Desenvolvimento de Sistemas"
            icone={<GiBlackBook size={40} />}
          />
        </Timeline>
      </DivInterna>
    </DivExterna>
  );
};

export default Estudos;
