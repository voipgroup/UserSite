import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './views/Dashboard';
import Numbers from './views/Numbers';
import Calls from './views/Calls';
import Profile from './views/Profile';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
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