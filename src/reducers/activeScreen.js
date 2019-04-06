import { CHANGE_ACTIVE_SCREEN } from '../actions/constants'

export default (state = {}, {type, newData}) => {
    switch (type) {
        case CHANGE_ACTIVE_SCREEN: 
            return {
                ...newData
            }
        default:
            return state
    }
}