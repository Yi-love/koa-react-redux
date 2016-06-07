'use strict';

import path from 'path';
import koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import route from 'koa-route';


import render from './lib/render';

var app = koa();

app.use(logger());

app.use(route.get('/' , index));
app.use(route.get('/cart' , cart));

function *index(){
	this.body = yield render('index' , {title:'Koa react webpack demo'});
}

function *cart(){
	var CART_INFO = [
		{
			isChecked: true,
			isSku : true,
			isDeleted : false,
			isCollect : false,
			thumb : './images/01.png',
			title : '七匹狼男鞋',
			num : 10,
			gid:88888,
			store : 100,
			price : 45.37,
			original : 999.99,
			skuMap : ['颜色：红色','尺寸：30']
		},
		{
			isChecked: false,
			isSku : true,
			isDeleted : true,
			isCollect : true,
			thumb : './images/02.png',
			title : '拖把',
			num : 1,
			gid:88899,
			store : 67,
			price : 22.09,
			original : 120.00,
			skuMap : ['型号：中','尺寸：1.5米']
		},
		{
			isChecked: true,
			isSku : false,
			isDeleted : true,
			isCollect : false,
			thumb : './images/03.png',
			title : '这个太牛逼了',
			num : 3,
			gid:555555,
			store : 20,
			price : 99.78,
			original : 21000.99,
			skuMap : false
		}
	];
	this.body = yield render('cart' , {title: '购物车' , cartinfo:JSON.stringify(CART_INFO)});
}

app.on('error' , (err , ctx)=>{
	console.log('server error : ' , err , ctx);
});

app.use(serve(path.join(__dirname ,'../build')));

if ( module.parent ) {
	app.listen(3000);
	console.log('listening on port 3000 ...');
}
