import { memo } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiInfo, FiPhoneCall } from 'react-icons/fi';

import { Tooltip } from '@mui/material';
import { Typography } from 'components';
import { useWindowSize } from 'utils';
import * as styled from './titleBar.styles';

const TitleBar = () => {
  const { width } = useWindowSize();

  return (
    <styled.TitleBar>
      <styled.DivInterna>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="quarto">Ranielli</div>
          <div className="digital">Montagna</div>
        </div>
        <styled.DivOpcoes className="menuWeb">
          <styled.LinkOpcao to="intro" smooth={true} activeClass="active" spy={true} offset={-50} duration={500}>
            Ínicio <styled.Sublinhado className="sublinhado" />
          </styled.LinkOpcao>

          <styled.LinkOpcao to="sobre" smooth={true} activeClass="active" spy={true} offset={50} duration={500}>
            Sobre <styled.Sublinhado className="sublinhado" />
          </styled.LinkOpcao>

          <styled.LinkOpcao to="contato" smooth={true} activeClass="active" spy={true} offset={50} duration={500}>
            Contato <styled.Sublinhado className="sublinhado" />
          </styled.LinkOpcao>
        </styled.DivOpcoes>
        <styled.DivOpcoes className="menuMobile">
          <Link to="intro" id="intro" smooth={true} activeClass="active" spy={true} offset={50} duration={500}>
            <Tooltip title={<Typography size="md">Ínicio</Typography>} arrow>
              <styled.OpcoesPhone>
                <FiHome />
              </styled.OpcoesPhone>
            </Tooltip>
          </Link>

          {width >= 500 && (
            <>
              <Link to="sobre" id="sobre" smooth={true} activeClass="active" spy={true} offset={50} duration={500}>
                <Tooltip title={<Typography size="md">Sobre</Typography>} arrow>
                  <styled.OpcoesPhone>
                    <FiInfo />
                  </styled.OpcoesPhone>
                </Tooltip>
              </Link>

              <Link to="contato" id="contato" smooth={true} activeClass="active" spy={true} offset={50} duration={500}>
                <Tooltip title={<Typography size="md">Contato</Typography>} arrow>
                  <styled.OpcoesPhone>
                    <FiPhoneCall />
                  </styled.OpcoesPhone>
                </Tooltip>
              </Link>
            </>
          )}
        </styled.DivOpcoes>
      </styled.DivInterna>
    </styled.TitleBar>
  );
};

export default memo(TitleBar);
