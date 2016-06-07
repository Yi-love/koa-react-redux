'use strict';

import React from 'react';

export default class NumberWrapper extends React.Component{
	constructor(props) {
	    super(props);
	}
	numSub(op){
		this.setBuyNum(this.props.state.num-1);
	}
	onChange(e){
		this.setBuyNum(+e.target.value.replace(/[^\d]/g,''));
	}
	numAdd(e){
		this.setBuyNum(+this.props.state.num+1);
	}
	setBuyNum(num){
		num = num >= this.props.state.min ? num : this.props.state.min;
		num = num <= this.props.state.max ? num : this.props.state.max;
		this.props.onChange(this.props.id,'num' , num);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.state.num != this.props.state.num;     
	}
	render(){
		return (<div className="op-box">
		    		<span className="op" onClick={this.numSub.bind(this)}>-</span>
		    		<input className="buynum" type="text" value={this.props.state.num || 1} onChange={this.onChange.bind(this)} />
		    		<span className="op" onClick={this.numAdd.bind(this)}>+</span>
		    	</div>); 
	}
}