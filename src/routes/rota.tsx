import { Public } from 'components';
import { FC } from 'react';

interface RotaProps {
  element: JSX.Element;
}

export const Rota: FC<RotaProps> = ({ element }) => <Public>{element}</Public>;

export default Rota;
