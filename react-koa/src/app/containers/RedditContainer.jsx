import React , { Component } from 'react'
import { Provider } from 'react-redux'

import RedditAsycApp from './RedditAsycAppContainer.jsx'

export default class RedditRoot extends Component{
	constructor(options){
		super(options)
	}
	render(){
		return (<Provider store={this.props.store}>
					<RedditAsycApp />
				</Provider>)
	}
}