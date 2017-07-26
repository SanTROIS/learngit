import Vue from 'vue'
import App from './App.vue'
import Vueroute from 'vue-router'
import routes from '../src/config/routes'
import axios from 'axios'
import serverIp from './config/serverIp'

Vue.use(Vueroute);
Vue.prototype.$axios = axios;
Vue.prototype.ServeAPI = serverIp;
const router = new Vueroute({
    routes,
    moade:"history"
});

new Vue({
    router,
  el: '#app',
  render: h => h(App)
})
