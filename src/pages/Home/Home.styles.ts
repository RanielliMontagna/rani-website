import styled from 'styled-components';

export const Geral = styled.div`
  overflow-y: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.coresNeutras.preto};
  scroll-behavior: smooth;  


  &::-webkit-scrollbar {
    width: 10px;
    @media (max-width: 576px) {
      width: 5px;
    }
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.coresNeutras.cinzaEscuro}30};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.coresNeutras.cinzaEscuro}90;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.coresNeutras.cinzaEscuro};
  }
`;

export const Intro = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.coresNeutras.preto};
`;
