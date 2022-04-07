import styled from 'styled-components';

export const DivExterna = styled.div`
  border: 0px solid ${({ theme }) => theme.coresNeutras.pretoAzulado};
  background-color: #00000005;
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
  text-align: center;

  span.typography {
    margin-bottom: 8px;
  }
`;

export const DivHabilidades = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  > span.typography {
    margin: 8px;

    &:hover {
      transition: all 0.3s ease;
    }
  }

  /* TODO: criar hover correto */

  > span.react {
    &:hover {
      color: #61dafb !important;
    }
  }

  > span.react-native {
    &:hover {
      color: #61dafb !important;
    }
  }

  > span.javascript {
    &:hover {
      color: #fcdc00 !important;
    }
  }

  > span.typescript {
    &:hover {
      color: #3178c6 !important;
    }
  }

  > span.css {
    &:hover {
      color: #264de4 !important;
    }
  }

  > span.electron {
    &:hover {
      color: #9ee9f8 !important;
    }
  }
`;
