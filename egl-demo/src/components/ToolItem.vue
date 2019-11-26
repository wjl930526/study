<template>
  <div class="toolItem">
    <b>热门分享</b>
    <div class="item-content">
      <img src="https://source.tutorabc.com.cn/ext/images/website/abc/banner/lvyou.jpg" alt="">
      <div class="item-content-right">
        <p>阿斯顿撒大所多撒多asd啊的</p>
        <van-button type="info" class="test">点击查看</van-button>
      </div>
    </div>
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
export default class ToolItem extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .toolItem{
    background-color: #ffffff;
    padding: 15px;
    border-radius: 16px;
    text-align: left;
    .item-content{
      display: flex;
      img{
        width: 50%;
      }
      .item-content-right{
        width: 50%;
        .test{
          width:130px;height:40px;
        }
      }
    }
  }
</style>
