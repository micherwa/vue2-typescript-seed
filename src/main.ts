import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/app.vue';
import routes from './views/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');