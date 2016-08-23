import React, { Component, PropTypes } from 'react';

export default class Counter extends Component{
	constructor(props) {
    	super(props)
	}
	onChange (e){
	    const value = +e.target.value.replace(/[^\d]/g,'');
	    if ( typeof value === 'number') {
	    	this.props.counterValue(value);
	    }
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.counter != this.props.counter;     
	}
	render(){
		const { counter ,counterSub ,counterAdd } = this.props;
		return (<div className="op-box">
		    		<span className="op" onClick={counterSub.bind(this)}>-</span>
		    		<input className="buynum" type="text" value={counter} onChange={this.onChange.bind(this)} />
		    		<span className="op" onClick={counterAdd.bind(this)}>+</span>
		    	</div>); 
	}
};

Counter.propTypes = {
	counterValue : PropTypes.func.isRequired,
	counterSub : PropTypes.func.isRequired,
	counterAdd : PropTypes.func.isRequired,
	counter : PropTypes.number.isRequired
}