import * as React from 'react';
import ReactLoading from 'react-loading';
import './LoadingAnimation.css'

interface Props {
  color?: string,
  width?: string,
  height?: string
}

export default (props: Props) => (
  <div className='LoadingAnimation' >
    <ReactLoading
      className='LoadingAnimation__internal'
      type={'spin'}
      color={props.color}
      width={props.width}
      height={props.height}
    />
  </div >
);
