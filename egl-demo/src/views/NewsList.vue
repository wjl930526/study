<template>
  <div class="newsList">
    <van-button type="primary">阅读</van-button>
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
export default class NewsLIst extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
