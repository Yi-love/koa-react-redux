# React

### 1.1 React是什么，定位
`React` 是一个前端javaScript库,专注于构建页面。React属于MVC中的V（view）。
> A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES.

### 1.2 语法
一般都会使用jsx语法，感觉写起来更舒服，简洁。

例如官方案例：

JSX
```js
  var HelloMessage = React.createClass({
    render: function() {
      return <div>Hello {this.props.name}</div>;
    }
  });

  ReactDOM.render(<HelloMessage name="John" />, mountNode);
```

JS
```js
  "use strict";

  var HelloMessage = React.createClass({
    displayName: "HelloMessage",

    render: function render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  });

  ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), mountNode);
```
### 1.3 组件
一个组件既可以引入其它组件也可以被其它组件当作组件引入。

SkuContainer:
```js
  /**
   * [SkuContainer sku渲染 ]
   */
  var SkuContainer = React.createClass({
  	render : function(){
  		return (<div className="sku-box">
  				{ this.props.isSku && this.props.skuMap.map(function(sku , key){ 
  					return (<span key={key}>{sku}</span>)
  					})
  				}
  			   </div>)
  	}
  });
```

CartItem:
```js
  /**
   * [CartItem 单个商品渲染]
   */
  var CartItem = React.createClass({
  	render : function(){
  		var that = this;
  		return (<div><table className="cart"><thead><tr><td>选择</td><td></td><td>名称</td><td>价格</td><td>原价</td><td>描述</td><td>数量</td><td>操作</td></tr></thead><tbody>
  				{this.props.carts && this.props.carts.map(function(car , key){
  					return (<tr key={key}>
  							<td><CheckBox isChecked={car.isChecked} id={key} onChange={that.props.onChange} /></td>
  							<td><img src={car.thumb} width="60" height="60" /></td>
  							<td><h4>{car.title}</h4></td>
  							<td><div>{car.price}</div></td>
  							<td><div>{car.original}</div></td>
  							<td><SkuContainer isSku={car.isSku} skuMap={car.skuMap} /></td>
  							<td><NumberInput state ={ {num : car.num,max:car.store , min : 1}} id={key} onChange={that.props.onChange} /></td>
  							<td><Operater isDeleted={car.isDeleted} isCollect={car.isCollect} id={key} onChange={that.props.onChange} /></td>
  						</tr>)
  					})
  				}</tbody></table></div>)
  	}
  });
```

Cart
```js
  /**
   * [cart  购物车]
   */
  var Cart = React.createClass({
  	//....

  	render: function(){
  		return (<div>
  				<CartItem carts={this.state.carts} onChange={this.handleChange} />
  				<CartMenu isAll={this.state.isAll} isCheckAll={this.isCheckAll} num={this.state.num} money={this.state.money} onClick={this.handleClick} />
  			</div>)
  	}
  });
```

### 1.4 原理
*   props是一个父组件传递给子组件的数据流，这个数据流可以一直传递到子孙组件。而state代表的是一个组件内部自身的状态；
*   改变一个组件自身状态，从语义上来说，就是这个组件内部已经发生变化，有可能需要对此组件以及组件所包含的子孙组件进行重渲染；
*   数据必须从顶层注入；
*   自己的状态保存在state , 外部状态通过父节点props传人。

### 1.5 应用场景

```
  1.普通模式 
    react
  2.工程化模式
    react+webpack+gulp
  3.同构初体验
    react
    redux
    koa
    webpack
    gulp
  4.同构进阶
    react
    react-router   
    redux
    koa
    koa-router
    isomorphic-fetch
    webpack
    gulp
```