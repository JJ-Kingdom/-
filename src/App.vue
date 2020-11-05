<template lang="pug">
  .app
    my-header
    keep-alive
      router-view
</template>

<script>
  import MyHeader from '@/common/Header'
  export default {
    components: {
      MyHeader
    }
  }
</script>

<style lang="sass">
.app
  position: relative
  min-height: 100%
  font-size: 16px
</style>
