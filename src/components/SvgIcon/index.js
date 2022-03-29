import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
  const {
    children,
    className,
    component: Component = 'svg',
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24',
    ...other
  } = props;

  return (
    <Component
      className={clsx('svg-icon', className)}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      ref={ref}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
});

SvgIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  htmlColor: PropTypes.string,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string
};

export default SvgIcon;
