import {combineReducers} from 'redux'

import { SET_COUNTER , DELETE_GOODS , COLLECT_GOODS , SELECT_GOODS , SELECT_ALL } from '../actions/cartAction'

function cart(state = {carts:[], num:0 , money:0 , isAll:false } , action){
	switch(action.type){
		case DELETE_GOODS :
		console.log(action)
			return Object.assign({} , state , {carts: state.carts.filter(function(current , key){
				return !(key === action.id && action.isDeleted) 
			})  , num : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					if ( action.isDeleted && i === action.id ) {
						continue;
					}
					if ( state.carts[i].isChecked){
						result += state.carts[i].num
					}
				}
				return result
			})() , money : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					if ( action.isDeleted && i === action.id ) {
						continue;
					}
					if ( state.carts[i].isChecked ){
						result += state.carts[i].num*state.carts[i].price
					}
				}
				return result
			})(),isAll : (function(){
				for (var i = 0; i < state.carts.length; i++) {
					if ( action.isDeleted && i === action.id ) {
						continue;
					}
					if ( !state.carts[i].isChecked ){
						return false
					}
				}
				return true
			})()} ) 
		case COLLECT_GOODS :
			return Object.assign({} , state , {carts: state.carts.filter(function(current , key){
				if ( key === action.id ) {
					current.isCollect = !current.isCollect
				}
				return true
			})} ) 
		case SET_COUNTER :
			return Object.assign({} , state , {carts: state.carts.filter(function(current , key){
				if ( key === action.id ) {
					current.num = action.value
				}
				return true
			}) , num : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					if ( state.carts[i].isChecked ){
						result += state.carts[i].num
					}
				}
				return result
			})() , money : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					if ( state.carts[i].isChecked ){
						result += state.carts[i].num*state.carts[i].price
					}
				}
				return result
			})()})
		case SELECT_GOODS :
			return Object.assign({} , state , {carts: state.carts.filter(function(current , key){
				if ( key === action.id ) {
					current.isChecked = !current.isChecked
				}
				return true
			}) , num : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					if ( state.carts[i].isChecked ){
						result += state.carts[i].num
					}
				}
				return result
			})() , money : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					if ( state.carts[i].isChecked ){
						result += state.carts[i].num*state.carts[i].price
					}
				}
				return result	
			})() ,isAll : (function(){
				for (var i = 0; i < state.carts.length; i++) {
					if ( !state.carts[i].isChecked ){
						return false
					}
				}
				return true
			})()})
		case SELECT_ALL :
			return Object.assign({} , state , {carts: state.carts.filter(function(current , key){
				current.isChecked = true
				return true
			}) , num : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					result += state.carts[i].num
				}
				return result
			})() , money : (function(){
				var result = 0
				for (var i = 0; i < state.carts.length; i++) {
					result += state.carts[i].num*state.carts[i].price
				}
				return result
			})() , isAll:true})
		default :
			return state
	}
}

const cartReducer = combineReducers({cart})

export default cartReducer