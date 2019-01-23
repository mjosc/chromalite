import * as React from 'react';
import ReactLoading from 'react-loading';
import './LoadingAnimation.css'

interface Props {
  color?: string,
  width?: number | string,
  height?: number | string,
  classes?: { external: string, internal: string }
}

const LoadingAnimation: React.FunctionComponent<Props> = props => {
  const { classes, ...rest } = props;
  return (
    <div className={`LoadingAnimation ${classes!.external}`} >
      <ReactLoading
        className={`LoadingAnimation__internal ${classes!.internal}`}
        type='spin'
        {...rest}
      />
    </div >
  );
};

// ReactLoading contains its own default props. Those properties specified here
// represent the corresponding overrides.
LoadingAnimation.defaultProps = {
  color: '#28425C',
  classes: { external: '', internal: '' }
};

export default LoadingAnimation;
