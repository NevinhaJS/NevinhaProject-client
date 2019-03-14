import {TOGGLE_LOADING} from './constants';

export const toggleLoading = status => ({
    type: TOGGLE_LOADING,
    status
});