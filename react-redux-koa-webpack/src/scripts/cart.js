'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import CartContainer from '../../app/containers/cartContanier.jsx';
import cartStore from '../../app/stores/cartStore';

let element = document.getElementById('cart');
const store = cartStore(window.__CART_INFO__);

render(<Provider store={store}><CartContainer /></Provider>, element);