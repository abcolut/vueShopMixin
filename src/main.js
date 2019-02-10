import Vue from 'vue';
import App from './App.vue';

import VueSession from 'vue-session'
Vue.use(VueSession, {persist: true})

import {store} from './store/store';
import {router} from './routes.js';

new Vue({
  data(){
    return {userId:0,
    }
  },
  el: '#app',
  store,
  router,
  render: h => h(App),
})


