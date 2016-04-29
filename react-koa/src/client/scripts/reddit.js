import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import redditConfigureStroe from '../../app/stores/RedditConfigureStore'
import RedditRoot from '../../app/containers/RedditContainer.jsx'

const state = window.__INITIAL_STATE__ || {};
let store = redditConfigureStroe(state)
render(
  <RedditRoot store={store} />,
  document.getElementById('root')
)