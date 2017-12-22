import {getLogin} from '../../api/api'
import * as types from '../mutaion_types'
const state={
  token:null
};
const actions={
  set_Token({commit},token){
    sessionStorage.setItem('token',token);
    commit(types.SET_TOKEN,token);
  },
  del_token({commit}){
    sessionStorage.removeItem('token');
    commit(types.DEL_TOKEN);
  }
};
const getters={
  get_token:state=>state.token
};
const mutations={
  [types.SET_TOKEN](state,data){
    if(data!=""){
      state.token=data
    }
  },
  [types.DEL_TOKEN](state){
    state.token=null
  }
};

export default {
   state,
  actions,
  getters,
  mutations
}


