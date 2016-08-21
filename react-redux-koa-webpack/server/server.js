'use strict';

import path from 'path';
import koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import 'babel-polyfill';
import render from './lib/render';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from '../app/components/index/index.jsx';
import { Provider } from 'react-redux';
import CartContainer from '../app/containers/cartContanier.jsx';
import cartStore from '../app/stores/cartStore';

const app = koa();
const router = new Router();
app.use(bodyParser());
app.use(logger());
app.use(router.routes());

router.get('/' , index);
router.get('/cart' , cart);
function *index(){
	let html = ReactDOMServer.renderToString(<Index />);
	this.body = yield render('index' , {title:'Koa react webpack demo' , reactHtml : html});
}
function *cart(){
	const store = cartStore({counter:345});
	this.body = yield render('cart' , {title:'购物车' , reactHtml : ReactDOMServer.renderToString(<Provider store={store}><CartContainer /></Provider>) , result: {counter:345}});
}

app.on('error' , (err , ctx)=>{
	console.log('server error : ' , err , ctx);
});

app.use(serve(path.join(__dirname ,'../build')));

if ( module.parent ) {
	app.listen(3000);
	console.log('listening on port 3000 ...');
}
