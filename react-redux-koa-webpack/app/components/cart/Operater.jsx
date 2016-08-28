'use strict';

import React, { Component, PropTypes } from 'react';

export default class Operater extends Component{
	constructor(props) {
    	super(props)
	}
	isCollectGoods(){
		this.props.collectGoods(this.props.id)
	}
	isDeleteGoods(){
		this.props.deleteGoods(this.props.id)
	}
	render(){
		const {isCollect , isDeleted} = this.props;
		let collecttxt= '收藏', collectcss = 'collect' ,  deletetxt = '删除' , delectcss='delete';
		isCollect ? (collecttxt = '取消'+collecttxt , collectcss = 'discollect') : null;
		isDeleted ? (deletetxt = '取消' , delectcss = 'disdelete' ) : null;
		
		return (<div className="item-opbox">
					<span className={'op-i '+collectcss} onClick={this.isCollectGoods.bind(this)}>{collecttxt}</span>
					<span className ={'op-i '+delectcss} onClick={this.isDeleteGoods.bind(this)}>{deletetxt}</span>
				</div>)
	}
}

Operater.propTypes = {
    collectGoods : PropTypes.func.isReqiured,
    deleteGoods : PropTypes.func.isReqiured,
    isDeleted : PropTypes.bool.isReqiured,
    isCollect : PropTypes.bool.isReqiured
}