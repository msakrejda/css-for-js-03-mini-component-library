/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const Progress = getProgressComponent(size);

  if (!Bar) {
    return null;
  }

  const clampedValue = Math.max(Math.min(value, 100), 0);

  return (
    <Bar role="progressbar" aria-valuenow={clampedValue}>
      <Progress pct={clampedValue} />
    </Bar>
  );
};

function getProgressComponent(size) {
  switch (size) {
    case 'small':
      return SmallProgress;
    case 'medium':
      return MediumProgress;
    case 'large':
      return LargeProgress;
  }
}

const Bar = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const BaseProgress = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 2px;
  height: var(--height);
  clip-path: inset(0px ${({pct}) => (100 - pct)}% 0px 0px);
`;

const SmallProgress = styled(BaseProgress)`
  --height: 4px;
`;

const MediumProgress = styled(BaseProgress)`
  --height: 8px;
`;

const LargeProgress = styled(BaseProgress)`
  --height: 12px;
  margin: 4px;
`;

export default ProgressBar;
