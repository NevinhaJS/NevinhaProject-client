import { combineReducers } from 'redux';
import screens from './screens'
import activeScreen from './activeScreen';

export default combineReducers({
  screens,
  activeScreen
})