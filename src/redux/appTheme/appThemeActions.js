import { SWITCH_THEME } from './appThemeActionTypes';

export const switchTheme = () => ({
  type: SWITCH_THEME,
  meta: {
    throttle: 100,
  },
});
