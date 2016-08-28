import React , {Component , PropTypes} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/cart/Counter.jsx'
import Operater from '../components/cart/Operater.jsx'
import Sku from '../components/cart/Sku.jsx'
import CheckBox from '../components/cart/CheckBox.jsx'
import CartMenu from '../components/cart/CartMenu.jsx'
import * as cartActions from '../actions/cartAction'

class CartContainer extends Component{
	constructor(props) {
    	super(props)
	}
	render(){
		const { deleteGoods ,collectGoods , selectGoods , counterValue , selectAll , getData ,cart} = this.props
		let {carts ,isAll , num , money} = cart
		return (<div><table className="cart"><thead><tr><td>选择</td><td></td><td>名称</td><td>价格</td><td>原价</td><td>描述</td><td>数量</td><td>操作</td></tr></thead><tbody>
				{carts && carts.map(function(car , key){
					return (<tr key={key}>
							<td><CheckBox isChecked={car.isChecked} id={key} selectGoods={selectGoods} /></td>
							<td><img src={car.thumb} width="60" height="60" /></td>
							<td><h4>{car.title}</h4></td>
							<td><div>{car.price}</div></td>
							<td><div>{car.original}</div></td>
							<td><Sku isSku={car.isSku} skuMap={car.skuMap} /></td>
							<td><Counter counter={car.num} counterValue={counterValue} id={key} /></td>
							<td><Operater isDeleted={car.isDeleted} isCollect={car.isCollect} id={key} deleteGoods={deleteGoods}  collectGoods={collectGoods} /></td>
						</tr>)
					})
				}</tbody></table>
				<CartMenu isAll={isAll} selectAll={selectAll} num={num} money={money} />
				</div>)
	}
};

CartContainer.propTypes = {
	cart: PropTypes.object.isRequired
}

//将state.counter绑定到props的counter
function mapStateToProps(state) {
	const {cart} = state;
	return {
		cart
	}
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(cartActions , dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps)(CartContainer)