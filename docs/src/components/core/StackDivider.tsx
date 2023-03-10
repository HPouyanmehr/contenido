// Types
import type { FC } from 'react';

// Custom Components
import Divider from 'components/core/Divider';

// Custom Types
import type { DividerProps } from 'components/core/Divider';
export interface StackDividerProps extends DividerProps {}

const StackDivider: FC<StackDividerProps> = (props) => {
  // Props
  const { orientation = 'vertical', flexItem = true, ...otherProps } = props;

  return (
    <Divider orientation={orientation} flexItem={flexItem} {...otherProps} />
  );
};

export default StackDivider;
