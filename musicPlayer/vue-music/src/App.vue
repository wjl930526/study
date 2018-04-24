<template>
  <div id="app">
    hello world
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'

export default {
  components: {
    MHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    color: $color-theme
</style>
