import { combineReducers } from 'redux';
import screens from './screens';
import activeLayout from './activeLayout';

export default combineReducers({
  screens,
  activeLayout
})