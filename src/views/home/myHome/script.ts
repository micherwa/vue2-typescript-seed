import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';
import { Product } from '../../../store/modules/home';
import UserService from '../../../services/UserService';
import ProductService from '../../../services/ProductService';

@Component
export default class myHome extends Vue {
    @Getter('products') productList: Product [];

    msg = 'world';
    userList = [];

    // 生命周期钩子
    created () {
        this.$store.dispatch('getProductList');
    }

    mounted () {
        this.getUserList();
    }

    // 计算属性
    get sayHello () {
        return 'hello ' + this.msg;
    }

    // 方法
    sayHi () {
        alert('hi: ' + this.msg);
    }

    async getUserList () {
        const res = await UserService.userList();
        this.userList = res.data.result;
    }
};
