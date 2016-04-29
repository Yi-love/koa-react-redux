'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import TodoItems from './TodoItems.jsx';

class App{
	render(element) {
	    var appRootElement = React.createElement(TodoItems);
	    if (element) {
	      ReactDOM.render(appRootElement, element);
	      return;
	    }
	    return ReactDOMServer.renderToString(appRootElement);
    }

	renderToDOM(element) {
	    if (!element) {
	      throw new Error('App.renderToDOM: element is required!');
	    }
	    this.render(element);
	}

 	renderToString() {
    	return this.render();
	}
}
export default App;


