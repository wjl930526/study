<template>
  <div class="appMain">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from 'vant';

@Component({
  components: {
    [Button.name]: Button,
  },
})
export default class AppMain extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .appMain{
    height: calc(100vh - 50px);
    overflow: scroll;
  }
</style>
