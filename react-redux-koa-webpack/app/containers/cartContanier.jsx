import React , {Component , PropTypes} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/cart/Counter.jsx'
import Operater from '../components/cart/Operater.jsx'
import Sku from '../components/cart/Sku.jsx'
import * as cartActions from '../actions/cartAction'

class CartContainer extends Component{
	constructor(props) {
    	super(props)
	}
	render(){
		const {counter ,counterSub,counterAdd ,counterValue, isDeleted , isCollect , deleteGoods ,collectGoods , isSku , skuMap} = this.props;
		return (<div>
					<div><Sku isSku={isSku} skuMap={skuMap} /></div>
					<div><Counter counter={counter} counterValue={counterValue} counterSub={counterSub} counterAdd={counterAdd} /></div>
					<div><Operater isDeleted={isDeleted} isCollect={isCollect} deleteGoods={deleteGoods}  collectGoods={collectGoods} /></div>
				</div>)
	}
};

CartContainer.propTypes = {
	counter: PropTypes.number.isRequired,
	counterValue: PropTypes.func.isRequired,
	counterSub : PropTypes.func.isRequired,
	counterAdd : PropTypes.func.isRequired,

	isDeleted: PropTypes.bool.isRequired,
	isCollect: PropTypes.bool.isRequired,
	deleteGoods: PropTypes.func.isRequired,
	collectGoods: PropTypes.func.isRequired,

	isSku : PropTypes.bool.isRequired,
	skuMap : PropTypes.array.isRequired
}

//将state.counter绑定到props的counter
function mapStateToProps(state) {
	const {isDeleted , isCollect , counter , isSku , skuMap} = state;
	return {
		isDeleted ,
		isCollect ,
		counter,
		isSku,
		skuMap
	}
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(cartActions , dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps)(CartContainer)