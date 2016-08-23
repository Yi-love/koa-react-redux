import React, { Component, PropTypes } from 'react';

export default class Sku extends Component{
	constructor(props) {
	    super(props);
	}
	render(){
		return (<div className="sku-box">
				{ this.props.isSku && this.props.skuMap.map(function(sku , key){ 
					return (<span key={key}>{sku}</span>)
					})
				}
			   </div>);
	}
}

Sku.propTypes = {
	isSku : PropTypes.bool.isRequired,
	skuMap: PropTypes.array.isRequired
}