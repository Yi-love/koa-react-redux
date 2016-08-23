import {combineReducers} from 'redux'

import {ADD_COUNTER , SUB_COUNTER , SET_COUNTER , DELETE_GOODS , COLLECT_GOODS} from '../actions/cartAction'

function isDeleted(state = false , action){
	switch(action.type){
		case DELETE_GOODS : 
			return !state
		default:
			return state
	}
}
function isCollect(state = false , action){
	switch(action.type){
		case COLLECT_GOODS :
			return !state
		default:
			return state
	}
}
function counter(state = 0 , action ){
	switch(action.type){
		case ADD_COUNTER :
			return state+1;
		case SUB_COUNTER :
			return state-1;
		case SET_COUNTER :
			return action.value;
		default :
			return state;
	}
};
function isSku(state = false , action){
	switch(action.type){
		default:
			return state
	}
}
function skuMap(state = [] , action){
	switch(action.type){
		default:
			return state
	}
}
const cartReducer = combineReducers({isDeleted , isCollect ,counter,isSku,skuMap})

export default cartReducer