'use strict';

import React from 'react';

export default class SkuWrapper extends React.Component{
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