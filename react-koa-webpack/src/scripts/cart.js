'use strict';

import React from 'react';
import {render} from 'react-dom';
import CartEntry from '../../app/entries/CartEntry.jsx';

import '../../src/style/cart.css';

var element = document.getElementById('cart');

render(<CartEntry carts={CART_INFO} /> , element);
