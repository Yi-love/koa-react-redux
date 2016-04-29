'use strict';

import path from 'path';
import koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import route from 'koa-route';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server'

import render from './lib/render';
// import {RedditEntry} from '../../dist/redditEntry'
import RENDER_SOURCE from './scripts/reddit'
// import RedditAsycApp from './../app/containers/RedditAsycAppContainer.jsx'
// import redditConfigureStore from './../app/stores/RedditConfigureStore'

var app = koa();

// Logger
app.use(logger());

// Routes

app.use(route.get('/', home));
app.use(route.get('/about', home));
app.use(route.get('/me',me));

app.use(route.get('/myredux', myredux));
app.use(route.get('/reddit', reddit));
app.use(route.get('/subreddit', function *(){
	if ( this.url.indexOf('reactjs') >= 0 ){
    this.body = items.reactjs.items;
  }else{
    this.body = items.frontend.items;
  }
}));
app.use(route.get('/info',info));

function *reddit(){
  // var store = redditConfigureStore(items);
  // var html = ReactDOMServer.renderToString(RedditAsycApp({store:store}))
  // var finalState = store.getState();
  // console.log(html , finalState);
  console.log(RENDER_SOURCE);
	this.body = yield render('reddit' , {title:'Redux & Asyc'});
}
var items = {
     frontend: {
       isFetching: true,
       didInvalidate: false,
       items: []
     },
     reactjs: {
       isFetching: false,
       didInvalidate: false,
       lastUpdated: 1439478405547,
       items: [
         {
           id: 42,
           title: 'Confusion about Flux and Relay'
         },
         {
           id: 500,
           title: 'Creating a Simple Application Using React JS and Flux Architecture'
         }
       ]
     }
}
function *myredux(){
	this.body = yield render('redux' , {title:'React & Redux'});
};

function *info(){
	this.body = yield render('index',{name:'jin',age:123});
};

function *home() {
	console.log(this);
  this.body = yield render('index', {title:'React-Koa',name:'Jin Yang'});
};

function *me(){
	this.body = yield render('me',{title:'Jin' ,name:'yang' , info:{a:'90',b:'80'}});
};

app.on('error', (err, ctx)=>{
  log.error('server error', err, ctx);
});
// Serve static files
app.use(serve(path.join(__dirname, '../../dist')));
if (module.parent) {
	app.listen(3000);
	console.log('listening on port 3000...');
};
