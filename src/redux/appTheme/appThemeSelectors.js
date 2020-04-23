import { COLORS } from './appThemeReducer';
export const getChecked = state => state.theme.isChecked;
export const getThemeColor = state => COLORS[state.theme.colorIndex];
