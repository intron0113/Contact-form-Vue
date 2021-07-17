import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import Textarea from './views/Textarea.vue';
import Sending from './views/SendingConfirmation.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  //component URLを紐付けする//
  routes: [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/textarea', component: Textarea },
    { path: '/sending', component: Sending },
  ],
});
