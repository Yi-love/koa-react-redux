'use strict';

import React, { Component, PropTypes } from 'react';

export default class Operater extends Component{
	constructor(props) {
    	super(props)
	}
	render(){
		const {isCollect , isDeleted ,collectGoods ,deleteGoods} = this.props;
		let collecttxt= '收藏', collectcss = 'collect' ,  deletetxt = '删除' , delectcss='delete';
		isCollect ? (collecttxt = '取消'+collecttxt , collectcss = 'discollect') : null;
		isDeleted ? (deletetxt = '取消' , delectcss = 'disdelete' ) : null;
		
		return (<div className="item-opbox">
					<span className={'op-i '+collectcss} onClick={collectGoods}>{collecttxt}</span>
					<span className ={'op-i '+delectcss} onClick={deleteGoods}>{deletetxt}</span>
				</div>)
	}
}

Operater.propTypes = {
    collectGoods : PropTypes.func.isReqiured,
    deleteGoods : PropTypes.func.isReqiured,
    isDeleted : PropTypes.bool.isReqiured,
    isCollect : PropTypes.bool.isReqiured
}