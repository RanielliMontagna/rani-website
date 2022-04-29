import { memo, useCallback, useState } from 'react';
import { FiHome, FiInfo, FiPhoneCall } from 'react-icons/fi';

import { Tooltip } from '@mui/material';
import { Typography } from 'components';
import { useWindowSize } from 'utils';
import * as styled from './titleBar.styles';

const TitleBar = () => {
  const { width } = useWindowSize();
  const [_, setReRender] = useState(false);

  const _handleInicio = useCallback(() => {
    setReRender((current) => !current);
    window.location.href = '#inicio';
  }, []);
  const _handleSobre = useCallback(() => {
    setReRender((current) => !current);
    window.location.href = '#sobre';
  }, []);
  const _handleContato = useCallback(() => {
    setReRender((current) => !current);
    window.location.href = '#contato';
  }, []);

  return (
    <styled.TitleBar>
      <styled.DivInterna>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="quarto">Ranielli</div>
          <div className="digital">Montagna</div>
        </div>
        <styled.DivOpcoes className="menuWeb">
          <styled.Opcoes onClick={_handleInicio}>
            Ínicio {window.location.hash === '#inicio' && <styled.Sublinhado />}
          </styled.Opcoes>
          <styled.Opcoes onClick={_handleSobre}>
            Sobre {window.location.hash === '#sobre' && <styled.Sublinhado />}
          </styled.Opcoes>
          <styled.Opcoes onClick={_handleContato}>
            Contato {window.location.hash === '#contato' && <styled.Sublinhado />}
          </styled.Opcoes>
        </styled.DivOpcoes>
        <styled.DivOpcoes className="menuMobile">
          <Tooltip title={<Typography size="md">Ínicio</Typography>} arrow>
            <styled.Opcoes onClick={_handleInicio}>
              <FiHome />
            </styled.Opcoes>
          </Tooltip>

          {width >= 500 && (
            <>
              <Tooltip title={<Typography size="md">Sobre</Typography>} arrow>
                <styled.Opcoes onClick={_handleSobre}>
                  <FiInfo />
                </styled.Opcoes>
              </Tooltip>

              <Tooltip title={<Typography size="md">Contato</Typography>} arrow>
                <styled.Opcoes onClick={_handleContato}>
                  <FiPhoneCall />
                </styled.Opcoes>
              </Tooltip>
            </>
          )}
        </styled.DivOpcoes>
      </styled.DivInterna>
    </styled.TitleBar>
  );
};

export default memo(TitleBar);
