//  mutation 同步修改状态，没有异步操作
import * as types from './mutation-types' //  加mutation-types 书写方便，便于lint工具检测

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}
export default mutations
