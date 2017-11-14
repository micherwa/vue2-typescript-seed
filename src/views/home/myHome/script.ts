import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class myHome extends Vue {
    msg = 'world';

    mounted () {

    }

    // 计算属性
    get sayHello () {
      return 'hello ' + this.msg
    }

    // 方法
    sayHi () {
      alert('hi: ' + this.msg)
    }
};
