'use strict';

import React from 'react';

import CartItemWrapper from '../components/cart/CartItemWrapper.jsx';
import CartMenu from '../components/cart/CartMenu.jsx';

export default class CartEntry extends React.Component{
	constructor(props) {
	    super(props);
		this.state = {carts:[] , num : 0 , money: 0 ,isAll : false};
	}
	componentWillMount(){
		var carts = this.props.carts;
		var data = this.computed(carts);
		data.carts = carts;
		this.handleSet(data);
	}
	handleChange(key ,props, value){
		var carts = this.state.carts;
		carts[key][props] = value;
		var data = this.computed(carts);
		data.carts = carts;
		this.handleSet(data);
	}
	handleClick(){
		console.log(this.state);
	}
	handleSet(obj){
		this.setState({carts:obj.carts , num:obj.num , money:obj.money , isAll:obj.isAll})
	}
	isCheckAll(e){
		var isall = !this.state.isAll , carts = this.state.carts; 
		for (var i = 0; i < carts.length; i++) {
		 	carts[i].isChecked = isall;
		};
		var data = this.computed(carts);
		data.carts = carts;
		this.handleSet(data);
	}
	computed(carts){
		 var num = 0 , money = 0 , isAll = true;
		 for (var i = 0; i < carts.length; i++) {
		 	if ( carts[i].isChecked ){
		 		num += carts[i].num;
		 		money += carts[i].num*carts[i].price;
		 	}else{
		 		isAll = false;
		 	}
		 };
		 return {num : num >0 ? num : 0 , money : money > 0 ? money : 0.00 , isAll:isAll}
	}
	render(){
		return (<div>
				<CartItemWrapper carts={this.state.carts} onChange={this.handleChange.bind(this)} />
				<CartMenu isAll={this.state.isAll} isCheckAll={this.isCheckAll.bind(this)} num={this.state.num} money={this.state.money} onClick={this.handleClick.bind(this)} />
			</div>)
	}
};