// Core
import { CompositeDecorator } from '../../core';

// Core Types
import type { DraftDecorator } from '../../core';

// Custom Hocs
import withDecoratorComponent from './withDecoratorComponent';

// Custom Types
import type { DecoratorProps } from '../../types';

const createDecorator = (rules: DecoratorProps[]) => {
  const decorators: DraftDecorator[] = [];

  rules.forEach((rule) =>
    decorators.push({
      strategy: rule.strategy,
      component: withDecoratorComponent(rule.component),
      props: rule.props,
    })
  );

  return new CompositeDecorator(decorators);
};

export default createDecorator;
