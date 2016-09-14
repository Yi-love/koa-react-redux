import {combineReducers} from 'redux'

import { SET_COUNTER , DELETE_GOODS , COLLECT_GOODS , SELECT_GOODS , SELECT_ALL } from '../actions/cartAction'


function checkAll(state , action ) {
    for (let i = 0; i < state.carts.length; i++) {
        if ( action.isDeleted && i === action.id ) {
            continue
        }
        if ( !state.carts[i].isChecked ){
            return false
        }
    }
    return true
}

function getMoney(state , action) {
    let result = 0
    for (let i = 0; i < state.carts.length; i++) {
        if ( action.isDeleted && i === action.id ) {
            continue
        }
        if ( state.carts[i].isChecked ){
            result += state.carts[i].num*state.carts[i].price
        }
    }
    return result
}

function getNum(state , action) {
    let result = 0
    for (let i = 0; i < state.carts.length; i++) {
        if ( action.isDeleted && i === action.id ) {
            continue
        }
        if ( state.carts[i].isChecked){
            result += state.carts[i].num
        }
    }
    return result
}

function deleteGoods(state , action) {
    return state.carts.filter(function(current , key){
            return !(key === action.id && action.isDeleted) 
        })
}

function collectGoods(state , action) {
    return state.carts.filter(function(current , key){
            if ( key === action.id ) {
                current.isCollect = !current.isCollect
            }
            return true
        })
}

function setGoodsCounter(state , action) {
    return state.carts.filter(function(current , key){
            if ( key === action.id ) {
                current.num = action.value
            }
            return true
        })
}

function selectGoods(state , action) {
    return state.carts.filter(function(current , key){
            if ( key === action.id ) {
                current.isChecked = !current.isChecked
            }
            return true
        })
}

function selectAllGoods(state , action ) {
    return state.carts.filter(function(current , key){
            if ( action.isDeleted ) {
                current.isChecked = false
                return false
            }
            current.isChecked = true
            return true
        })
}

function cart(state = {carts:[], num:0 , money:0 , isAll:false } , action){
    switch(action.type){
        case DELETE_GOODS :
            return Object.assign({} , state , {carts: deleteGoods(state , action)  , num : getNum(state , action) , money : getMoney(state , action),isAll: checkAll(state , action ) }) 
        case COLLECT_GOODS :
            return Object.assign({} , state , {carts: collectGoods(state , action) } ) 
        case SET_COUNTER :
            return Object.assign({} , state , {carts: setGoodsCounter(state , action) , num : getNum(state , action) , money : getMoney(state , action) })
        case SELECT_GOODS :
            return Object.assign({} , state , {carts: selectGoods(state , action) , num : getNum(state , action) , money : getMoney(state , action) ,isAll : checkAll(state , action )})
        case SELECT_ALL :
            return Object.assign({} , state , {carts: selectAllGoods(state , action ) , num : getNum(state , action) , money : getMoney(state , action ) , isAll:true})
        default :
            return state
    }
}

const cartReducer = combineReducers({cart})

export default cartReducer