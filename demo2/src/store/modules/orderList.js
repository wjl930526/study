import Vue from 'vue'
const state = {
  //存放各种数据
  orderList: [],
  params: {}

}

const getters = {
  //用于页面中调用state的值，因为页面上无法直接使用state中的数据，只能通过getters进行获取
  getOrderList: (state) => {
    console.log(state)
    return state.orderList
  }
}

const actions = {
  //可以进行异步操作的动作，
    fetchOrderList({commit,store}){
        //可以在此处进行请求数据
        // Vue.$http

        //一般来说，Vue 中只允许 mutation 对state进行更改,而不允许 actions 直接对state进行修改
        //在页面中可以使用Vue.$store.dispatch('fetchOrderList') 调用action  也可以使用vue.$store.commit(方法名,参数) 调用mutation
        Vue.$http.post('/api/getPrice',reqParams)
        .then((res)=>{
            commit('changeOrderList',res.data.list)
        },(err)=>{
            console.log(err)
        })
    }
}

const mutations = {
  //只能进行同步的动作
  //第二个参数是从页面中传进来的
  changeOrderList(state, orderList) {
    state.orderList = orderList
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

