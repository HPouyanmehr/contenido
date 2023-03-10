// Types
import type { FC, FunctionComponent } from 'react';
import type { DecoratorComponentProps } from './component';

// Custom Types
import type { DecoratorStrategy } from './strategy';

export interface DecoratorProps {
  strategy: DecoratorStrategy;
  component:
    | FC<DecoratorComponentProps>
    | FunctionComponent<DecoratorComponentProps>;
  props?: object;
}
