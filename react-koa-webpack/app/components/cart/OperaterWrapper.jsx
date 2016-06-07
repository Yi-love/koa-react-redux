'use strict';

import React from 'react';

export default class OperaterWrapper extends React.Component{
	constructor(props) {
	    super(props);
	}
	handleCollect(){
		this.props.onChange(this.props.id , 'isCollect' , !this.props.isCollect);
	}
	handleDelete(){
		this.props.onChange(this.props.id , 'isDeleted' , !this.props.isDeleted);
	}
	render(){
		var collecttxt= '收藏', collectcss = 'collect' ,  deletetxt = '删除' , delectcss='delete';
		this.props.isCollect ? (collecttxt = '取消'+collecttxt , collectcss = 'discollect') : null;
		this.props.isDeleted ? (deletetxt = '取消' , delectcss = 'disdelete' ) : null;
		return (<div className="item-opbox">
					<span className={'op-i '+collectcss} onClick={this.handleCollect.bind(this)}>{collecttxt}</span>
					<span className ={'op-i '+delectcss} onClick={this.handleDelete.bind(this)}>{deletetxt}</span>
				</div>)
	}
}