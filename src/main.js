import Vue from 'vue'
import {router} from './routes';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import TitleSubAppBar from './components/TitleSubAppBar';

Vue.component('TitleSubAppBar', TitleSubAppBar)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
