<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in selections" :key="index" @click="toggleSelection(index)" :title="item.label" :class="{active:checkActive(index)}">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nowIndexs: []
      }
    },
    props: {
      selections: {
        type: Array,
        default: [{
          label: "test",
          value: 0
        }]
      }
    },
    methods: {
      toggleSelection(index) {
        if (this.nowIndexs.indexOf(index) === -1) {
          this.nowIndexs.push(index)
        } else {
          this.nowIndexs.splice(this.nowIndexs.indexOf(index), 1)
        }
        this.$emit('on-change', this.getArray())
      },
      checkActive(index) {
        return this.nowIndexs.indexOf(index) != -1
      },
      getArray() {
        let arr = []
        this.nowIndexs.map((val, index, array) => {
          arr.push(this.selections[val])
        }, this)
        return arr
      }
    },

  }

</script>
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }

  .chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }

  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }

</style>
