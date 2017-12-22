import Vue from 'vue'
import Vuex from 'vuex'
import count from './module/count'
import token from './module/userInfo'
import collapse from './module/collapse'
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    count,
    token,
    collapse
  }
})
