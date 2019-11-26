<template>
  <div class="layout">
    <app-main></app-main>
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/newsList"
        icon="home-o"
      >
        阅读
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/tools"
        icon="search"
      >
        工具
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/mine"
        icon="search"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';
import AppMain from '@/layout/AppMain.vue';

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    AppMain,
  },
})
export default class Layout extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
