import { css } from 'styled-components';
import { Colors } from 'shared';

export const getColor = ({ color }: { color?: Colors }) => {
  switch (color) {
    case 'primary':
      return css`
        ${({ theme }) => theme.cores.primaria};
      `;
    case 'secondary':
      return css`
        ${({ theme }) => theme.cores.secundaria};
      `;
    case 'terciary':
      return css`
        ${({ theme }) => theme.cores.terciaria};
      `;
    case 'success':
      return css`
        ${({ theme }) => theme.coresUtilitarias.success};
      `;
    case 'warning':
      return css`
        ${({ theme }) => theme.coresUtilitarias.warning};
      `;
    case 'danger':
      return css`
        ${({ theme }) => theme.coresUtilitarias.danger};
      `;
    case 'darkGray':
      return css`
        ${({ theme }) => theme.coresNeutras.cinzaClaro};
      `;
    case 'lightGray':
      return css`
        ${({ theme }) => theme.coresNeutras.cinzaEscuro};
      `;
    case 'darkBlue':
      return css`
        ${({ theme }) => theme.coresNeutras.pretoAppBar};
      `;
    default:
      return css`
        color;
      `;
  }
};

export const getContrastColor = ({ color }: { color?: Colors }) => {
  switch (color) {
    case 'primary':
      return css`
        ${({ theme }) => theme.coresNeutras.branco};
      `;
    case 'secondary':
      return css`
        ${({ theme }) => theme.cores.terciaria};
      `;
    case 'terciary':
      return css`
        ${({ theme }) => theme.cores.secondaria};
      `;
    case 'success':
      return css`
        ${({ theme }) => theme.coresNeutras.branco};
      `;
    case 'warning':
      return css`
        ${({ theme }) => theme.coresNeutras.branco};
      `;
    case 'danger':
      return css`
        ${({ theme }) => theme.coresNeutras.branco};
      `;
    case 'darkGray':
      return css`
        ${({ theme }) => theme.coresNeutras.branco};
      `;
    case 'lightGray':
      return css`
        ${({ theme }) => theme.coresNeutras.branco};
      `;
    case 'darkBlue':
      return css`
        ${({ theme }) => theme.coresNeutras.branco};
      `;
    default:
      return css`
        ${({ theme }) => theme.coresNeutras.preto};
      `;
  }
};
