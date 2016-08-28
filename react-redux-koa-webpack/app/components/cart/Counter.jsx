import React, { Component, PropTypes } from 'react';

export default class Counter extends Component{
	constructor(props) {
    	super(props)
	}
	onChange (e){
	    const value = +e.target.value.replace(/[^\d]/g,'');
	    if ( typeof value === 'number') {
	    	this.props.counterValue(this.props.id,value);
	    }
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.counter != this.props.counter;     
	}
	counterSub(){
		if ( this.props.counter-1 >= 1 )
		    this.props.counterValue(this.props.id,this.props.counter-1);
	}
	counterAdd(){
		if ( this.props.counter+1 <= 100 )
		    this.props.counterValue(this.props.id,this.props.counter+1);
	}
	render(){
		const { counter } = this.props;
		return (<div className="op-box">
		    		<span className="op" onClick={this.counterSub.bind(this)}>-</span>
		    		<input className="buynum" type="text" value={counter} onChange={this.onChange.bind(this)} />
		    		<span className="op" onClick={this.counterAdd.bind(this)}>+</span>
		    	</div>); 
	}
};

Counter.propTypes = {
	counterValue : PropTypes.func.isRequired,
	counter : PropTypes.number.isRequired
}