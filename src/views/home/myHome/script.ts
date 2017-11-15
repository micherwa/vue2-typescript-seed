import Vue from 'vue';
import Component from 'vue-class-component';
import UserService from '../../../services/UserService';

@Component
export default class myHome extends Vue {
    msg = 'world';
    userList = [];

    async created () {
        const res = await UserService.userList();
        this.userList = res.data.result;
    }

    // 计算属性
    get sayHello () {
      return 'hello ' + this.msg;
    }

    // 方法
    sayHi () {
      alert('hi: ' + this.msg);
    }
};
