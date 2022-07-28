import P from 'prop-types';
import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ type }, ref) => {
  return <input ref={ref} type={type} />;
});

Input.propTypes = {
  ref: P.oneOfType([P.func, P.shape({ current: P.instanceOf(Element) })]),
  type: P.string.isRequired,
};

export default Input;
