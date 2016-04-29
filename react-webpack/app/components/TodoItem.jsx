'use strict';

import React from 'react';

export default class TodoItem extends React.Component {
	constructor() {
	   super();
	   this.state = {likes:0};
	   this.like = this.like.bind(this);
	}

	render(){
		let owner = this.props.owner;
		let task = this.props.task;
		let likes = this.state.likes;

		return  <div className='todoitem'>
					<span className="todoitem-owner">{owner}</span>
					<span className="todoitem-task">{task}</span>
					<span className="todoitem-likes">{likes}</span>
					<span className="todoitem-like" onClick={this.like}>Like</span>
				</div>;
	}

	like(){
		this.setState({likes:this.state.likes+1});
	}
};