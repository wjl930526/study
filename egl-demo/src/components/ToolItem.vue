<template>
  <div class="toolItem">
    <div class="item-title"><b>{{itemData.title}}</b><span class="item-title-redline"></span></div>
    <div class="item-content">
      <van-image
        lazy-load
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="item-content-right">
        <p class="item-content-right-desc">{{itemData.desc}}</p>
        <router-link to=""></router-link>

        <div class="item-content-right-button">立即查看</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button, Image, Lazyload } from 'vant';

@Component({
  components: {
    [Button.name]: Button,
    [Image.name]: Image
  }
})
export default class ToolItem extends Vue {
  @Prop() private itemData: any;

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .toolItem{
    background-color: #ffffff;
    padding: 25px 28px;
    border-radius: 16px;
    box-shadow:0px 0px 15px 0px rgba(171,181,227,0.5);
    text-align: left;
    .item-title{
      font-size: 0;
      display: inline-block;
      position: relative;
      b{
        font-size: 38px;
        color: rgba(50,49,49,1);
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        letter-spacing:4px;
        position: relative;
        z-index: 10;
      }
      .item-title-redline {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height:12px;
        background:linear-gradient(90deg,rgba(255,167,148,1) 0%,rgba(233,36,36,1) 100%);
        border-radius:5px;
        // opacity: 0.5;
      }
    }
    .item-content{
      display: flex;
      margin-top: 10px;
      ::v-deep .van-image{
        width: 318px;
        height: 192px;
        border-radius: 10px;
        overflow: hidden;
      }
      .item-content-right{
        width: 50%;
        padding: 0 30px;
        box-sizing: border-box;
        flex-direction:column;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .item-content-right-desc { 
          font-size: 28px;
          font-weight: 400;
          color: rgba(74,74,74,1);
          line-height: 40px;
        }
        .item-content-right-button {
          font-size: 26px;
          font-weight: 400;
          padding: 10px 33px;
          color: #ffffff;
          border-radius: 28px;
          // line-height: 37px;
          background:linear-gradient(360deg,rgba(249,59,60,1) 0%,rgba(244,84,73,1) 100%);
        }
      }
    }
  }
</style>
