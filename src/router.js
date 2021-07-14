import Vue from 'Vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Users from './views/Users.vue'

Vue.use(Router);


export default  new Router({
made:"history",
//component URLを紐付けする//
routes:[{path:'/',component:Home},{path:'/users',component:Users}]
});