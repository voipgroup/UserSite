import Vue from 'vue';
import VueRouter from 'vue-router';
// import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Numbers from './views/Numbers';
import Calls from './views/Calls';
import Profile from './views/Profile';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   redirect: '/login',
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/',
    //   redirect: '/login',
    // },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      // meta: {
      //   authentication: true
      // }
    },
    {
      path: '/numbers',
      name: 'numbers',
      component: Numbers
    },
    {
      path: '/calls',
      name: 'calls',
      component: Calls
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})