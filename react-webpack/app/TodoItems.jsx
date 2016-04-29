'use strict';
import React from 'react';
import TodoItem from './components/todoItem.jsx';
import TopBar from './components/topbar/topbar.jsx';

export default class TodoItems extends React.Component{
	constructor() {
	   super();
	   this.state = {
	   		todoItems: [
               {
                   task: 'Learn React'
               },
               {
                   task: 'Learn Webpack'
               },
               {
                   task: 'Conquer World'
               }
		    ],
		    owner: 'Yi-love'
	   };
	}

	render(){
		let todoItems = this.state.todoItems;
		let owner = this.state.owner;
		

		return  <div><TopBar/>
				<ul>{todoItems.map((todoItem, i) =>
                    <li key={'todoitem' + i}>
                        <TodoItem owner={owner} task={todoItem.task} />
                    </li>
                )}</ul>
				<img src='./big.png' />
                </div>;
	}
};
