import *as types from '../mutaion_types'
const state={
  collapse:false
};
const actions={
  toggle_collapse({commit}){
    commit(types.SET_COLLAPSE)
  }
};
const getters={
  get_collapse:state=>state.collapse
};
const mutations={
  [types.SET_COLLAPSE](state){
    state.collapse=!state.collapse
  },

};
export default {
  state,
  actions,
  getters,
  mutations
}
