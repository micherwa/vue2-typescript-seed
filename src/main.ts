import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index';
import App from './views/app.vue';
import routes from './views/routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
