'use strict';

import React from 'react';

export default class CheckBox extends React.Component{
	constructor(props) {
	    super(props);
	}
	handleChecked(e){
		this.props.onChange(this.props.id, 'isChecked', !this.props.isChecked);
	}
	shouldComponentUpdate(nextProps, nextState) {
	  	return nextProps.isChecked != this.props.isChecked;
	}
	render(){
		return (<input type="checkbox" checked={this.props.isChecked} onChange={this.handleChecked.bind(this)} />);
	}
}