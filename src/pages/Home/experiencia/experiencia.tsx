import { DivExterna, DivInterna } from './experiencia.styles';

import { useWindowSize } from 'utils';
import Item from './item/item';

import { Timeline } from '@mui/lab';

import { FaConnectdevelop, FaReact } from 'react-icons/fa';
import { MdOutlineHomeWork } from 'react-icons/md';
import { Divider } from 'components';

const Experiencia = () => {
  const { width } = useWindowSize();

  return (
    <DivExterna>
      <DivInterna data-aos="fade-up" data-aos-duration="1500">
        <div>
          <h1>Experiências</h1>
          <Divider styles={{ margin: '0px 0px 16px 0px', width: '193px' }} />
        </div>

        <Timeline position={width > 530 ? 'alternate' : 'right'}>
          <Item
            ano="2022"
            titulo="Tech Lead Front-End"
            local="SB Sistemas - Marau, RS"
            icone={<FaConnectdevelop size={40} />}
          />
          <Item
            ano="2022"
            titulo="Desenvolvimento Front-End e Mobile"
            local="SB Sistemas - Marau, RS"
            icone={<FaReact size={40} />}
          />
          <Item
            ano="2021"
            titulo="Desenvolvimento Front-End"
            local="SB Sistemas - Marau, RS"
            icone={<MdOutlineHomeWork size={40} />}
          />
        </Timeline>
      </DivInterna>
    </DivExterna>
  );
};

export default Experiencia;

