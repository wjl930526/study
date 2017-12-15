<template>
  <div>
    <input type="text" v-model="myData">
    <i>{{computedData}}</i>
    <p>也可以不使用计算属性，使用methods实现，区别在于，计算属性的更新只会根据其基于的变量进行更新，只有基于的变量(myData)更新了，才会去计算(如果不基于变量则相当于定死了，不会更新)，而methods调用时一直都会计算。</p>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        myData: ''
      };
    },
    computed: {
      computedData() {
        return this.myData + 'I am Data'
      }
    }
  };
</script>