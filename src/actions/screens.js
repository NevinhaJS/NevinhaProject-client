import {GET_SCREENS, ADD_SCREEN, CHANGE_ACTIVE_SCREEN, SET_SCREENS} from './constants';

export const getScreens = () => ({
  type: GET_SCREENS
});

export const setScreens = screens => ({
  type: SET_SCREENS,
  screens
});

export const addScreen = data => ({
  type: ADD_SCREEN,
  data
});

export const changeActiveScreen = newData => ({
  type: CHANGE_ACTIVE_SCREEN,
  newData
});