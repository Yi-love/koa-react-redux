export const SET_COUNTER = 'SET_COUNTER'
export const ADD_COUNTER = 'ADD_COUNTER'
export const SUB_COUNTER = 'SUB_COUNTER'

export const DELETE_GOODS = 'DELETE_GOODS'
export const COLLECT_GOODS = 'COLLECT_GOODS'

export function deleteGoods( isDeleted ){
	return {
		type  : DELETE_GOODS
	}
}
export function collectGoods(isCollect){
	return {
		type  : COLLECT_GOODS
	}
}
export function counterValue(value){
	return {
		type : SET_COUNTER,
		value : value
	}
}
export function counterAdd(){
	return {
		type : ADD_COUNTER
	}
}
export function counterSub(){
	return {
		type : SUB_COUNTER
	}
}