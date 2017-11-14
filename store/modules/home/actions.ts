import { Commit, Action, ActionTree } from 'vuex';
import UserService from 'services/UserService';
import * as types from './types';
import { State } from './index';

export async function getUsers (context: { commit: Commit }) {
    const response = await UserService.userList();
    let result = response.data || {};
    context.commit(types.GET_USERS, result);
    return result;
};

const actions: ActionTree<State, any> = {
  getUsers
};

export default actions;
