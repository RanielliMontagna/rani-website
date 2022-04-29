import { ThemeProvider } from 'styled-components';
import { azulQD, brancoQD, cinzaClaro, cinzaEscuro, danger, pretoAzulado, pretoQD, success, warning } from './cores';
import { tamanhoFonte } from './fontes';

const _coresNeutras = {
  cinzaClaro: cinzaClaro,
  cinzaEscuro: cinzaEscuro,
  pretoAzulado: pretoAzulado,
  branco: brancoQD,
  preto: pretoQD,
  azul: azulQD,
};

const _coresUtilitarias = {
  success: success,
  warning: warning,
  danger: danger,
};

export const _temaClaro = {
  tamanhoFonte,
  cores: {
    primaria: azulQD,
    secundaria: pretoQD,
    terciaria: brancoQD,
  },
  coresUtilitarias: _coresUtilitarias,
  coresNeutras: _coresNeutras,
};

export const _temaEscuro = {
  tamanhoFonte,
  cores: {
    primaria: azulQD,
    secundaria: brancoQD,
    terciaria: pretoQD,
  },
  coresUtilitarias: _coresUtilitarias,
  coresNeutras: _coresNeutras,
};

export type ThemeType = typeof _temaClaro;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={_temaEscuro}>{children}</ThemeProvider>;
};
