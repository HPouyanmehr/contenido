// Custom Types
import type { ThemeModeState } from 'types/contexts/themeMode';
import type { ThemeModeAction } from 'types/actions/themeMode';

type ThemeModeReducerType = (
  state: ThemeModeState,
  action: ThemeModeAction
) => ThemeModeState;

const themeModeReducer: ThemeModeReducerType = (state, action) => {
  switch (action.type) {
    case '/themeMode/toggle':
      return state === 'dark' ? 'light' : 'dark';

    case '/themeMode/light':
      return 'light';

    case '/themeMode/dark':
      return 'dark';

    default:
      return state;
  }
};

export default themeModeReducer;
