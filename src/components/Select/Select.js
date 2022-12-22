import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Chevron id='chevron-down' size={24} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const Chevron = styled(Icon)`
  color: ${COLORS.gray700};
  pointer-events: none;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: -24px;
`;

const StyledSelect = styled.select`
  appearance: none;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  border: none;
  padding: 8px 8px;

  padding-right: 36px;

  &:hover {
    color: ${COLORS.black};
    outline: 1px solid ${COLORS.primary};
  }
`;

export default Select;
