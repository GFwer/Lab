import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FError from './views/FError.vue';
import TeachBaidu from './views/TeachchBaidu.vue';
import About from './views/About.vue';
import YearProgress from './views/YearProgress.vue';
import WeChatGroupAnalyse from './views/WeChat-Group-Analyse.vue';
import EchartsExample from './views/Echarts.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/fError',
      name: 'fError',
      component: FError,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/teachBaidu/:search?',
      name: 'teachBaidu',
      component: TeachBaidu,
    },
    {
      path: '/yearProgress',
      name: 'yearProgress',
      component: YearProgress,
    },
    {
      path: '/wechatGroupAnalyse',
      name: 'wechatGroupAnalyse',
      component: WeChatGroupAnalyse,
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: EchartsExample,
    },
  ],
});
