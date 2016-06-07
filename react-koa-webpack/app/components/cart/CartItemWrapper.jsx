'use strict';

import React from 'react';

import CheckBox from './CheckBox.jsx';
import NumberWrapper from './NumberWrapper.jsx';
import SkuWrapper from './SkuWrapper.jsx';
import OperaterWrapper from './OperaterWrapper.jsx';

export default class CartItemWrapper extends React.Component{
	constructor(props) {
	    super(props);
	}
	render(){
		var that = this;
		return (<div><table className="cart"><thead><tr><td>选择</td><td></td><td>名称</td><td>价格</td><td>原价</td><td>描述</td><td>数量</td><td>操作</td></tr></thead><tbody>
				{this.props.carts && this.props.carts.map(function(car , key){
					return (<tr key={key}>
							<td><CheckBox isChecked={car.isChecked} id={key} onChange={that.props.onChange.bind(this)} /></td>
							<td><img src={car.thumb} width="60" height="60" /></td>
							<td><h4>{car.title}</h4></td>
							<td><div>{car.price}</div></td>
							<td><div>{car.original}</div></td>
							<td><SkuWrapper isSku={car.isSku} skuMap={car.skuMap} /></td>
							<td><NumberWrapper state ={ {num : car.num,max:car.store , min : 1}} id={key} onChange={that.props.onChange.bind(this)} /></td>
							<td><OperaterWrapper isDeleted={car.isDeleted} isCollect={car.isCollect} id={key} onChange={that.props.onChange.bind(this)} /></td>
						</tr>)
					})
				}</tbody></table></div>)
	}
}