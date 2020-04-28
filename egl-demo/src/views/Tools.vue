<template>
  <div class="tools">
    <tool-item :itemData="toolItems[0]"></tool-item>
    <!-- <tool-item></tool-item>
    <tool-item></tool-item> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import ToolItem from '@/components/ToolItem.vue';

@Component({
  components: {
    [Button.name]: Button,
    ToolItem
  }
})
export default class Tools extends Vue {
  private toolItems = [
    {
      title: '热点海报',
      desc: '一键分享属于你的个性创意海报',
      img: 'https://img.yzcdn.cn/vant/cat.jpeg',
      to: '/HotPoster'
    }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tools{
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
  background-color: #f5f5f5;
}
</style>
