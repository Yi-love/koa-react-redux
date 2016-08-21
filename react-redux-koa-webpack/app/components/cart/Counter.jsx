import React, { Component, PropTypes } from 'react';

export default class Counter extends Component{
	render (){
		const {changeValue , numSub , numAdd , counter } = this.props;
		return (<div className="op-box">
		    		<span className="op" onClick={numSub}>-</span>
		    		<input className="buynum" type="text" value={counter} onChange={this.onChange.bind(this)} />
		    		<span className="op" onClick={numAdd}>+</span>
		    	</div>); 
	}
	onChange (e){
	    const value = +e.target.value.replace(/[^\d]/g,'');
	    if ( typeof value === 'number') {
	    	this.props.changeValue(value);
	    }
	}
};

Counter.propTypes = {
	changeValue : PropTypes.func.isRequired,
	numSub : PropTypes.func.isRequired,
	numAdd : PropTypes.func.isRequired,
	counter : PropTypes.number.isRequired
}