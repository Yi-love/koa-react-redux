'use strict';

import path from 'path';
import koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';

import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import 'babel-polyfill';
import router from './routes'
const app = koa();
app.use(bodyParser());
app.use(logger());
app.use(router.routes());


app.on('error' , (err , ctx)=>{
	console.log('server error : ' , err , ctx);
});

app.use(serve(path.join(__dirname ,'../build')));

if ( module.parent ) {
	app.listen(3000);
	console.log('listening on port 3000 ...');
}
