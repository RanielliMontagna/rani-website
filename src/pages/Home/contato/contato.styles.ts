import styled from 'styled-components';

export const DivContato = styled.div`
  border: 0px solid ${({ theme }) => theme.coresNeutras.pretoAzulado};
  border-top-width: 1px;
  display: flex;
  justify-content: center;
`;

export const DivInterna = styled.div`
  width: 1000px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivCards = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    margin-top: 16px;
    flex-direction: column;
  }
`;
