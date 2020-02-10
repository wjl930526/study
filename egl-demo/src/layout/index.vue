<template>
  <div class="app-wrapper">
    <app-main></app-main>
    <van-tabbar route safe-area-inset-bottom>
      <van-tabbar-item
        replace
        to="/newsList"
        icon="newspaper-o"
      >
        阅读
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/tools"
        icon="share"
      >
        工具
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/mine"
        icon="user-circle-o"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Tabbar, TabbarItem } from 'vant';
import AppMain from '@/layout/components/AppMain.vue';

@Component({
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    AppMain
  }
})
export default class Layout extends Vue {}
</script>

<style scoped lang="scss">
</style>
