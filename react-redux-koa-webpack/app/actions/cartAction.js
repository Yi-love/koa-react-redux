'use strict';

import fetch from 'isomorphic-fetch';

export const REQUEST_GETS = 'REQUEST_GETS';
export const DELETED_GOODS = 'DELETED_GOODS';
export const COLLECT_GOODS = 'COLLECT_GOODS';

export function deletedGoods(goods){
	return {
		type : DELETED_GOODS,
		goods
	}
};

export function collectDoods(goods){
	return {
		type : COLLECT_GOODS,
		goods
	}
};