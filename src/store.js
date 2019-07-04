import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '',
  },
  mutations: {
    setTitle(state, title) {
      document.title = title;
      state.title = title;
    },
  },
  actions: {

  },
});
