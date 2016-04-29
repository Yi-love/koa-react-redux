import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'

import redditConfigureStore from '../../app/stores/RedditConfigureStore'
import RedditRoot from '../../app/containers/RedditContainer.jsx'

export default function RedditEntry(store) {
	store = redditConfigureStore(store || {});
	return { html: ReactDOMServer.renderToString(<RedditRoot store={store} />) , finalState: store.getState() };
}
