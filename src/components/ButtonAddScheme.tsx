import * as React from 'react';
import SvgIconAdd from '../icons/SvgIconAdd';
import './ButtonAddScheme.css';

interface Props {
  onClick: (e: MouseEvent) => void,
}

const ButtonAddScheme: React.FunctionComponent<Props> = props => (
  <button className='ButtonAddScheme'>
    <SvgIconAdd className='ButtonAddScheme__icon' />
  </button>
);

export default ButtonAddScheme;
