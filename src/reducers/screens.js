import { ADD_SCREEN, SET_SCREENS } from '../actions/constants';
import {ScreenStructure} from '../utils/structures';

export default (state = [], {type, data, screens}) => {
    switch (type) {
        case ADD_SCREEN: 
            return [
                ...state,
                {
                    ...data
                }
            ]
        case SET_SCREENS:
            return [
                ...state,
                ...screens
            ]
        default:
            return state
    }
}