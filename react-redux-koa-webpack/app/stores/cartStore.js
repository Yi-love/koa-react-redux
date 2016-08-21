'use strict'

import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducers/counter';

const createStoreWithMiddleware  = applyMiddleware(...[thunk])(createStore);

export default function cartStore( initialStore){
	const store = createStoreWithMiddleware(cartReducer , initialStore);
	return store;
}