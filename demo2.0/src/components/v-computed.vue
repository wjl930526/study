<template>
  <div>
      <input type="text" v-model="myData">
      <i>{{computedData}}</i>
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
        return this.myData+'I am Data'
    }
  }
};
</script>
