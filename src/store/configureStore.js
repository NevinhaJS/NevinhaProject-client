import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from '../reducers';

function configureStore(initialState){
	return createStore(
		combinedReducers,
		initialState,
		applyMiddleware(thunk, reduxImmutableStateInvariant())
	);
}

export default configureStore;