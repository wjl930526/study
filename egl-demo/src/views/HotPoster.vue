<template>
  <div class="hostPoster">
    <van-button type="primary">热点海报</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from 'vant';

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class HostPoster extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
