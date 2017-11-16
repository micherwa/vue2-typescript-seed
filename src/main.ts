import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueRouter from 'vue-router';
import store from './store/index';
import App from './views/app.vue';
import routes from './views/routes';
import 'css/app.scss';

Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
