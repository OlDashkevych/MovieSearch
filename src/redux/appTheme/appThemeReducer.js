import { SWITCH_THEME } from './appThemeActionTypes';

export const COLORS = ['#1c1c27', '#2a5b86'];

const initialState = {
  colorIndex: 0,
  isChecked: false,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        colorIndex: (state.colorIndex + 1) % COLORS.length,
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
}
