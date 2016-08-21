export const ADD_COUNTER = 'ADD_COUNTER'
export const SUB_COUNTER = 'SUB_COUNTER'
export const SET_COUNTER = 'SET_COUNTER'

export function changeValue(value){
	return {
		type : SET_COUNTER,
		value : value
	}
}
export function numAdd(){
	return {
		type : ADD_COUNTER
	}
}
export function numSub(){
	return {
		type : SUB_COUNTER
	}
}