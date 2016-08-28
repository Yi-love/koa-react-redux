import React, { Component, PropTypes } from 'react';

export default class CheckBox extends Component{
	constructor(props) {
	    super(props);
	}
	handleChecked(e){
		this.props.selectGoods(this.props.id);
	}
	shouldComponentUpdate(nextProps, nextState) {
	  	return nextProps.isChecked != this.props.isChecked;
	}
	render(){
		return (<input type="checkbox" checked={this.props.isChecked} onChange={this.handleChecked.bind(this)} />);
	}
}

CheckBox.propTypes = {
	isChecked : PropTypes.bool.isRequired,
	selectGoods : PropTypes.func.isRequired
}