import * as types from './mutation-types' //  书写方便，便于lint工具检测类型

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}
