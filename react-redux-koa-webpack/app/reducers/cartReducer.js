'use strict'

import {combineReducers} from 'redux';
import {REQUEST_GETS , DELETED_GOODS , COLLECT_GOODS} from '../actions/cartAction';

function deletedGoods(state = 0 , action ){
	switch(action.type){
		case DELETED_GOODS :
			return action
		default :
			return state;
	}
};

const cartReducer = combineReducers({
	deletedGoods
});

export default cartReducer;