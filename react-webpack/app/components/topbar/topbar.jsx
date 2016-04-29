'use strict';

import React from 'react';
import { Link } from 'react-router';

import './topbar.css';
import './topbar.scss';

export default class TopBar extends React.Component {
	constructor() {
	   super();
	}

	render(){
		return <div className="topbar">
					<Link to="/"><h1 className="logo"></h1></Link>
					<ul className="list">
						<li className="item">登录</li>
						<li className="item">注册</li>
					</ul>
				</div>;
	}
};