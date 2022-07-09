import styled from 'styled-components';

export const DivExterna = styled.div`
  background-color: #00000005;
  border: 0px solid ${({ theme }) => theme.coresNeutras.pretoAzulado};
  border-top-width: 1px;
  display: flex;
  justify-content: center;
`;

export const DivInterna = styled.div`
  width: 1000px;
  padding: 32px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
