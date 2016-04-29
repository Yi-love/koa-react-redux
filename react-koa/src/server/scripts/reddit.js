import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { createStore , applyMiddleware , compose } from 'redux' 
import { Provider } from 'react-redux'
import redditConfigureStore from '../../app/stores/RedditConfigureStore'
// import RedditRoot from '../../app/containers/RedditContainer.jsx'
import rootReducer from '../../app/reducers/RedditReducer'
// import RedditAsycApp from '../../app/containers/RedditAsycAppContainer.jsx'
var  store = createStore(rootReducer);


// var cc = ReactDOMServer.renderToString(appRootElement)
// var store = {};

// export const RENDER_SOURCE = { html: renderToString(<RedditRoot />) , finalState: store.getState() }
export const RENDER_SOURCE = '000'