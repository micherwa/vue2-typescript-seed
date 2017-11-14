import { GetterTree, Getter } from 'vuex'
import { State } from './index';

const users: Getter<State, any> = (state: State) => state.users;

const getterTree: GetterTree<State, any> = {
  users
}

export default getterTree;


