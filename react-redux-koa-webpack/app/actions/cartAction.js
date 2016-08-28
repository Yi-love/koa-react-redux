export const SET_COUNTER = 'SET_COUNTER'
export const SELECT_GOODS = 'SELECT_GOODS'
export const DELETE_GOODS = 'DELETE_GOODS'
export const COLLECT_GOODS = 'COLLECT_GOODS'
export const SELECT_ALL = 'SELECT_ALL'

export function deleteGoods( id ){
	return {
		type  : DELETE_GOODS,
		id    : id
	}
}
export function collectGoods(id){
	return {
		type  : COLLECT_GOODS,
		id    : id
	}
}
export function counterValue(id , value){
	return {
		type : SET_COUNTER,
		value : value ,
		id   : id
	}
}
export function selectGoods(id){
	return {
		type : SELECT_GOODS,
		id : id
	}
}
export function selectAll(id){
	return {
		type: SELECT_ALL,
		id : id
	}
}