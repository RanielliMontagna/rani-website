import { Link } from 'react-scroll';
import styled from 'styled-components';

export const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: calc(100% - 64px);
  padding: 0px 32px;
  height: 60px;
  color: ${({ theme }) => theme.coresNeutras.branco};
  background-color: ${({ theme }) => theme.coresNeutras.preto};
  font-size: 24px;

  .quarto {
    margin-right: 4px;
    font-weight: 700;
  }

  .digital {
    font-weight: 300;
  }
`;

export const DivInterna = styled.div`
  font-weight: 300;
  width: 1368px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const DivOpcoes = styled.div`
  display: flex;
  font-size: 18px;
  height: 100%;

  &.menuMobile {
    display: none;
    @media (max-width: 576px) {
      display: flex;
    }
  }

  &.menuWeb {
    @media (max-width: 576px) {
      display: none;
    }
  }
`;

export const OpcoesPhone = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0px 24px;
  transition: 0.3s;
  border-radius: 0px 0px 8px 8px;

  &:hover {
    background-color: ${({ theme }) => theme.coresNeutras.azul}80;
  }
`;

export const LinkOpcao = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0px 24px;
  transition: 0.3s;
  border-radius: 0px 0px 8px 8px;
  transition: all 0.5s ease-in-out;

  .sublinhado {
    margin-bottom: -5px;
    opacity: 0;
  }

  &.active {
    background-color: ${({ theme }) => theme.coresNeutras.azul}30;

    .sublinhado {
      transition: all 0.5s ease-in-out;
      opacity: 1;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.coresNeutras.azul}80;
  }
`;

export const Sublinhado = styled.div`
  width: 100%;
  margin-top: 4px;
  height: 3px;
  background-color: ${({ theme }) => theme.coresNeutras.azul};
`;
