import { Commit } from 'vuex';
import ProductService from '../../../services/ProductService';
import * as types from './types';

export async function getProductList (context: { commit: Commit }) {
    const response = await ProductService.productList();
    const result = response.data;
    context.commit(types.GET_PRODUCTS, result);
    return result;
};
