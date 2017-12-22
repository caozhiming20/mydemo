import * as types from '../mutaion_types'
//count 数据模块
//定义初始化数据
const state = {
  count:0
}
//定义更改数据的mutations
const mutations={
  [types.ADD_COUNT](state,num){
    state.count=state.count+num;
  },
  [types.DECREASE](state){
    state.count--;
  },
  [types.INCREASE](state){
    state.count++;
  }
}
//定义action，用 这个action 去 commit mutations
const actions={
  // num 是传入的数据
  add_count({commit},num){
    commit(types.ADD_COUNT,num)
  },
  increase({commit}){
    commit(types.INCREASE);
  },
  decrease({commit}){
    commit(types.DECREASE);
  }
};
// 定义获取数据的模块，这里通常可以用来过程数据，计算数据返回
const getters={
  get_count:state=>state.count
};
//组装成module, 暴露出去
export default {
  state,
  actions,
  mutations,
  getters
}
