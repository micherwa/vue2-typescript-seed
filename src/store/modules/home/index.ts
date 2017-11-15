import * as types from './types';
import * as getters from './getters';
import * as actions from './actions';

const state = {
    products: []
};

const mutations = {
    [types.GET_PRODUCTS] (state: State, resp: any) {
        state.products = resp.result ? resp.result : [];
    }
};

export interface State {
    products: Product []
}

export interface Product {
    id: number,
    name: string
}

export default {
    state,
    mutations,
    actions,
    getters
}
