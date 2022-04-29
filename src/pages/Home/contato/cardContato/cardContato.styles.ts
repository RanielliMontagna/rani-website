import styled from 'styled-components';
import { azulQD } from 'themes';

export const DivCardContato = styled.div`
  border-radius: 16px;
  margin: 32px 16px;
  width: 290px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.coresNeutras.pretoAzulado}40;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.coresNeutras.pretoAzulado}40;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.coresNeutras.pretoAzulado};
    border: 1px solid ${azulQD};
  }

  @media (max-width: 1150px) {
    width: 230px;
  }

  @media (max-width: 1000px) {
    cursor: default;
    width: 70vw;
    margin: 8px 0px;
  }
`;
