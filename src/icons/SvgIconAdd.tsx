import * as React from 'react';

interface Props {
  width?: number | string,
  height?: number | string,
  className?: string,
  viewBox?: string,
  style?: React.CSSProperties // Todo: Remove
}

const SvgIconAdd: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props;
  return (
    <svg className={`SvgIconAdd ${className}`} {...rest}>
      <path
        d='M11.97 0v8.904h8.652v2.814H11.97v8.904H8.652v-8.904H0V8.904h8.652V0z'
        fill='#FFF'
        fillRule='evenodd'
      />
    </svg>
  );
};

SvgIconAdd.defaultProps = {
  height: 21,
  width: 21,
  viewBox: '0 0 21 21',
  className: ''
  // style: {border: '1px solid black'} // Todo: Remove
}

export default SvgIconAdd;
