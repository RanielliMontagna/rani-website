import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from 'components';
import { DivDireita, DivEsquerda, DivIcone } from './item.styles';

interface ItemProps {
  icone?: React.ReactElement;
  ano: string;
  titulo: string;
  local?: string;
}

const Item = ({ icone, ano, titulo, local }: ItemProps) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0' }}>
        <DivDireita></DivDireita>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <DivIcone>{icone}</DivIcone>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '50px', px: 2 }}>
        <DivEsquerda>
          <div>
            <Typography color="primary" size="xl" weight="bold">
              {ano}
            </Typography>
          </div>
          <div>
            <Typography weight="bold" style={{ fontSize: 20 }}>
              {titulo}
            </Typography>
          </div>
          <div>
            <Typography weight="slim" size="md">
              {local}
            </Typography>
          </div>
        </DivEsquerda>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Item;
