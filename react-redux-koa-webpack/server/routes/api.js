import Router from 'koa-router';
import render from './../lib/render';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from '../../app/components/index/index.jsx';
import { Provider } from 'react-redux';
import CartContainer from '../../app/containers/cartContanier.jsx';
import cartStore from '../../app/stores/cartStore';
const router = new Router();
// router.prefix('/api')
router.get('/' , index);
router.get('/cart' , cart);
function *index(){
	let html = ReactDOMServer.renderToString(<Index />);
	this.body = yield render('index' , {title:'Koa react webpack demo' , reactHtml : html});
}
router.post('/delete' , function*(){
	console.log(this.request.query)
	this.body = yield {isDeleted:true};
});
function *cart(){
	var carts = [
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
	]
	const store = cartStore({cart:{carts:carts,num:13 , money:753.04 , isAll:false }});
	this.body = yield render('cart' , {title:'购物车' , reactHtml : ReactDOMServer.renderToString(<Provider store={store}><CartContainer /></Provider>) , result: store.getState()});
}
router.get('/json' , function*(){
	this.body = yield ({a:'hhhhhh'})
});


export default router