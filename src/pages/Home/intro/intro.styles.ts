import styled from 'styled-components';

export const Intro = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.coresNeutras.branco};
  font-size: 4vw;
  background-image: url('https://images.unsplash.com/photo-1496302662116-35cc4f36df92');
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 576px) {
    background-image: url('/static/images/quartoMobile.jpg');
  }
`;

export const Titulo = styled.div`
  text-align: center;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    font-size: 35px;
  }

  .primaria {
    color: ${({ theme }) => theme.coresNeutras.azul};
    font-weight: bold;
  }
`;

export const Descricao = styled.div`
  width: 70%;
  padding: 8px 32px;
  text-align: center;
  font-weight: 300;
  font-size: 2vw;

  @media (max-width: 576px) {
    font-size: 4vw;
  }
`;

export const DivArrow = styled.div`
  position: absolute;
  bottom: 5%;
`;

export const SaibaMais = styled.div`
  color: ${({ theme }) => theme.coresNeutras.branco};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: 0.5s;
  border-radius: 100%;

  @media (max-width: 576px) {
    cursor: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.coresNeutras.preto}80;
  }
`;
