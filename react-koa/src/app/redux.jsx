import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import todoApp from './reducers/todo'

let store = createStore(todoApp)

let rootElement = document.getElementById('react-redux')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
