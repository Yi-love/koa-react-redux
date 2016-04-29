import { createStore , applyMiddleware , compose } from 'redux' 
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/RedditReducer'

let middlewares = [
  thunkMiddleware
];
const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares)
)(createStore);

export default function redditConfigureStore(initialStore){
	const store = createStoreWithMiddleware(rootReducer,initialStore)
	return store;
};