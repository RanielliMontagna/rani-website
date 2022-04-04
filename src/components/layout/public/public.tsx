import { FC, memo } from 'react';
import { useApp } from 'store';
import { Loading } from 'components';
import * as styled from './public.styles';

export interface PublicProps {
  children: JSX.Element;
}

const Public: FC<PublicProps> = ({ children }) => {
  const { loading } = useApp();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {loading && <Loading />}
      <styled.DivChildren>{children}</styled.DivChildren>
    </div>
  );
};

export default memo(Public);
