<template>
  <div>
    <slot name="header"></slot>
    <slot name="header">no slot(可设置name)时显示我</slot>
    I get Data from parent :{{PaData}}
    <pre>props中可以通过对象，进行限制从父级获取的数据的格式,不是规定的格式的话，则会发出警告，但不报错</pre>
    <slot name="footer"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      PaData: Number
    }
    //   props:['paData']
  }
</script>