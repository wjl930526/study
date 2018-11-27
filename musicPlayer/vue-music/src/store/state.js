// 顺序：state=>getters=>mutation-types=>mutation
import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1 // 当前播放哪首歌
}
export default state
