import styled from 'styled-components';

export const Sobre = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.coresNeutras.preto};
  margin-top: -100px;
  padding-top: 100px;

  img {
    border-radius: 50%;
    filter: brightness(0.8);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  }
`;
