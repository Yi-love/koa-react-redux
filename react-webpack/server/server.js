'use strict';

import path from 'path';
import koa from 'koa';
import logger from 'koa-logger';
import route from 'koa-route';
import serve from 'koa-static';

import render from './lib/render';

var app = koa();

app.use(logger());

app.use(route.get('/' , index));

function *index() {
	this.body = yield render('index',{title:'React &webpack'});
};

app.use(serve(path.join(__dirname,'../build')));

if (module.parent) {
	app.listen(3000);
	console.log('listening on port 3000...');
};
