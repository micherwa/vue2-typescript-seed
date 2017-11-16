import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';
import { Product } from '../../../store/modules/home';
import UserService from '../../../services/UserService';
import ProductService from '../../../services/ProductService';

@Component({
    // here can define template
})

export default class myHome extends Vue {
    @Getter('products') productList: Product [];

    msg: string = 'world';
    userList: any = [];

    // 生命周期钩子
    created () {
        this.$store.dispatch('getProductList');
    }

    mounted () {
        this.getUserList();
    }

    // 计算属性
    get sayHello () : string {
        return 'hello ' + this.msg;
    }

    // 方法
    sayHi () : void {
        alert('hi: ' + this.msg);
    }

    async getUserList () : Promise<void> {
        const res = await UserService.userList();
        this.userList = res.data.result;
    }
};
