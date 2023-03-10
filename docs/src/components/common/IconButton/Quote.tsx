// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatQuoteIcon from 'components/icon/Quote';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface QuoteIconButtonProps extends IconButtonProps {}

const QuoteIconButton: FC<QuoteIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Quote' {...otherProps}>
      <FormatQuoteIcon />
    </IconButton>
  );
};

export default QuoteIconButton;
