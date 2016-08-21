'use strict';

import React from 'react';

export default class Index extends React.Component{
	constructor(props) {
	    super(props);
	}
	render(){
		return (<div>
					<h1> Hello , world</h1>
					<a href="/cart">购物车</a>
				</div>);
	}
};
