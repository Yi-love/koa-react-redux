'use strict';

import React from 'react';
import {render} from 'react-dom';
import IndexEntry from '../../app/entries/IndexEntry.jsx';

var element = document.getElementById('index');

render(<IndexEntry /> , element);
