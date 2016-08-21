import {combineReducers} from 'redux';
import {ADD_COUNTER , SUB_COUNTER , SET_COUNTER} from '../actions/counter'

export default function counter(state = 0 , action ){
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

const cartReducer = combineReducers({
	counter
});

export default cartReducer;