// Custom Types
import type { State, StateHandler, SyntheticKeyboardEvent } from '../common';

export interface ShortcutMap {
  style: string;
  shortcut: string[] | ((event: SyntheticKeyboardEvent) => string);
  handler: (state: State, stateHandler: StateHandler, ...rest: any) => any;
}
