import * as React from 'react';
import SvgAdd from '../icons/SvgAdd';
import './ButtonAddScheme.css';

interface Props {
  onClick: (e: MouseEvent) => void,
}

const ButtonAddScheme: React.FunctionComponent<Props> = props => (
  <button className='ButtonAddScheme'>
    <SvgAdd className='ButtonAddScheme__icon' />
  </button>
);

export default ButtonAddScheme;
