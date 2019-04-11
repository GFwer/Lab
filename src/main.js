import Vue from 'vue';
import ElementUI from 'element-ui';
import ECharts from 'vue-echarts';

import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import './registerServiceWorker';

Vue.component('v-chart', ECharts);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
