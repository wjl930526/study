<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div> -->
    <div :title="msg">
      <componentA v-for="(item,key) in list1" :key="key"></componentA>
      <p v-text="msg"></p>
      <p v-text="jsonHtml"></p>
      <p v-html="jsonHtml"></p>
      <p v-text="status==true?'success':'fail'"></p><button @click="status=!status">按钮</button>
      <ul>
        <li v-for="(item,index) in list1" :key="index" :class="{odd: index % 2}">
         第{{index}}个，值为{{item}}
        </li>
      </ul>
      list2:
      <ul>
        <li v-for="(item,index) in list2" :key="index" :class="{odd: index % 3}">
         名:{{item.name}},价格:{{item.price}}
        </li>
      </ul>
      <button @click="addItem">增加1</button>
      <br>
      <button @click="addItem2">增加2</button>
      <br>
      <a :href="links">{{links}}</a>
      <br>
      <p v-if="isCreate">isCreate为true</p>
      <p v-else>isCreate为false</p>
      <button @click="isCreate=!isCreate">isCreate</button>
      <p v-show="isShow">v-show</p>
      <button @click="isShow=!isShow">isShow</button>

      <componentA @my-event="onCompAEvent"></componentA>
      <input type="text" v-model.number="inputData">{{ typeof inputData}}
      <pre>v-model有三种修饰器.lazy延迟同步  .number失去焦点时，所有非数字都消失  .trim能用空格等特殊字符</pre>

      <computeds></computeds>  
    </div>
</template>

<script>
import Vue from 'vue'
import componentAA from './components/a.vue'
import computed from './components/v-computed.vue'
export default {
  name: 'app',
  components:{
    componentA:componentAA,
    computeds:computed
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      jsonHtml: '<i>斜体字</i>',
      status: true,
      list1:[1,2,3,4],
      list2:[
        {
          name:'aa',
          price:'10'
        },
        {
          name:'bb',
          price:20
        },
        {
          name:'cc',
          price:30
        },
        {
          name:'dd',
          price:40
        }
      ],
      links:'www.baidu.com',
      isShow:true,
      isCreate:false,
      inputData:[]
    }
  },
  methods:{
    addItem:function(){
      this.list1=[1] //可以触发更新
      // this.list1[2]=555   //  不触发更新  直接更改length也不触发
    },
    addItem2:function(){
      // this.list2=[{
      //   name:'gg', 
      //   price:5100
      // }]             //可以触发更新
      this.list2[1]=[{
        name:'gg', 
        price:5100
      }]                //不触发更新 直接更改length也不触发 可以使用vue.set
      Vue.set(this.list2,1,{  //此时vue只是在全局的main.js中定义，要在当前组件也引入
        name:'gg',
        price:5200
      })
    },
    onCompAEvent:function(params){
      alert('AAAAA'+params)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.odd{
  color: yellowgreen;
}
</style>
