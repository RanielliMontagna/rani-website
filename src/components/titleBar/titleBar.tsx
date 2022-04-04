import { FC, memo, useCallback } from 'react';
import { MenuItem } from '@szhsin/react-menu';
import { Menu, MenuItemConteudo } from 'components';
import { IoMenuSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as styled from './titleBar.styles';

interface TitleBarProps {
  rota: 'home' | 'contato' | 'login';
}

const TitleBar: FC<TitleBarProps> = ({ rota }) => {
  const navigate = useNavigate();

  const _handleInicio = useCallback(() => {
    //todo - criar rota para home
  }, []);
  const _handleSobre = useCallback(() => {
    //todo - criar rota para sobre
  }, []);
  const _handleContato = useCallback(() => {
    //todo - criar rota para contato
  }, []);

  return (
    <styled.TitleBar>
      <styled.DivInterna>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="quarto">Ranielli</div>
          <div className="digital">Montagna</div>
        </div>
        <styled.DivOpcoes className="menuWeb">
          <styled.Opcoes onClick={_handleInicio}>Ínicio {rota === 'home' && <styled.Sublinhado />}</styled.Opcoes>
          <styled.Opcoes onClick={_handleSobre}>Sobre {rota === 'contato' && <styled.Sublinhado />}</styled.Opcoes>
          <styled.Opcoes onClick={_handleContato}>Contato {rota === 'login' && <styled.Sublinhado />}</styled.Opcoes>
        </styled.DivOpcoes>
        <styled.DivOpcoes className="menuMobile">
          <Menu
            align="end"
            menuButton={
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <IoMenuSharp size={24} />
              </div>
            }
          >
            <>
              {rota !== 'home' && <MenuItem onClick={() => navigate('/')}>{MenuItemConteudo('Home')}</MenuItem>}
              {rota !== 'contato' && (
                <MenuItem onClick={() => navigate('/contato')}>{MenuItemConteudo('Contato')}</MenuItem>
              )}
              <MenuItem onClick={() => navigate('/login')}>{MenuItemConteudo('Login')}</MenuItem>
            </>
          </Menu>
        </styled.DivOpcoes>
      </styled.DivInterna>
    </styled.TitleBar>
  );
};

export default memo(TitleBar);
