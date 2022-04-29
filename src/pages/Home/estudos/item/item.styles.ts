import styled from 'styled-components';

export const DivEsquerda = styled.div`
  width: 30vw;

  @media (max-width: 530px) {
    width: 60vw;
  }

  @media (max-width: 401px) {
    width: 45vw;
  }
`;
export const DivDireita = styled.div`
  width: 30vw;

  @media (max-width: 530px) {
    display: none;
  }
`;

export const DivIcone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;
