import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem'
//引入axios  内置了
import './api/config';
import './utils/switch.js';


//min-t组件的按需引入
import { Button ,Range } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Range.name, Range)



Vue.config.productionTip = false;

const vues = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(vues)