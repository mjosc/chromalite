import * as React from 'react';
import ReactLoading from 'react-loading';
import './LoadingAnimation.css'

interface Props {
  isLoading: boolean,
  color?: string,
  width?: string,
  height?: string
}

export default (props: Props) =>
  props.isLoading ? (
    <div className='LoadingAnimation'>
      <ReactLoading 
        className='LoadingAnimation__internal' 
        type={'spin'} 
        color={props.color}
        width={props.width}
        height={props.height}
      />
    </div>
  ) : null;
