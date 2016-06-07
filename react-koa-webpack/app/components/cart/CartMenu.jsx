'use strict';

import React from 'react';

export default class CartMenu extends React.Component{
	constructor(props) {
	    super(props);
	}
	render(){
		return (<div className="cart-allpay">
			<label><input type="checkbox" checked={this.props.isAll} onChange={this.props.isCheckAll.bind(this)} />全选</label><span className="num">{this.props.num}个</span> <span className="pay">{this.props.money}元</span><button onClick={this.props.onClick.bind(this)}>获取数据</button>
			</div>)
	}
}