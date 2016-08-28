import React, { Component, PropTypes } from 'react';

export default class CartMenu extends React.Component{
	constructor(props) {
	    super(props);
	}
	render(){
		const {selectAll} = this.props
		return (<div className="cart-allpay">
			<label><input type="checkbox" checked={this.props.isAll} onChange={selectAll} />全选</label><span className="num">{this.props.num}个</span> 
			<span className="pay">{this.props.money}元</span>
			</div>)
	}
}
CartMenu.propTypes = {
	isAll : PropTypes.bool.isRequired,
	num : PropTypes.number.isRequired,
	money : PropTypes.number.isRequired, 
	selectAll : PropTypes.func.isRequired
}