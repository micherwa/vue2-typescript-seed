import * as types from './types';
import * as getters from './getters';
import * as actions from './actions';

export interface State {
    users: any[]
};

const state: State = {
  users: []
};

const mutations = {
    [types.GET_USERS] (state: State, resp: any) {
        state.users = resp.result ? resp.result : [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
