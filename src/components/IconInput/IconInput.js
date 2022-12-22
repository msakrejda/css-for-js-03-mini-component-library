import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  if (!VALID_ICONS.includes(icon)) {
    throw new Error('unrecognized icon: ' + icon);
  }
  const styles = STYLES[size];
  if (!styles) {
    throw new Error('unrecognized size: ' + size);
  }
  return (
    <Wrapper width={width} fontSize={styles.fontSize}>
      {/*<VisuallyHidden>{label}</VisuallyHidden> see https://discord.com/channels/783425607492304947/958382439242276884/1055309089787351161 */}
      <Input type='text' placeholder={placeholder} paddingLeft={styles.iconSize} borderBottomWidth={styles.borderBottomWidth} />
      <StyledIcon id={icon} size={styles.iconSize} />
    </Wrapper>
  );
};
const STYLES = {
  large: {
    fontSize: 18 / 14,
    iconSize: 18,
    borderBottomWidth: 2,
  },
  small: {
    fontSize: 16 / 14,
    iconSize: 14,
    borderBottomWidth: 1,
  }
}

const VALID_ICONS = ['at-sign', 'search'];

const Wrapper = styled.div`
  position: relative;
  font-size: ${({fontSize}) => fontSize}rem;
  width: ${({width}) => typeof width === 'number' ? `${width}px` : width};
  color: ${COLORS.gray500};
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  pointer-events: none;
  height: 24px;
  top: 2px;
  left: 0;
`;

const Input = styled.input`
  appearance: none;
  padding-left: ${({paddingLeft}) => paddingLeft + 4}px;
  border: none;
  border-bottom: ${({borderBottomWidth}) => borderBottomWidth}px solid black;
  width: 100%;
  font-weight: bold;
  color: inherit;

  &::placeholder {
    font-weight: normal;
  }

  &:hover {
    color: black;
  }

  &:hover::placeholder {
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
