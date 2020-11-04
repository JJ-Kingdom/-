<template lang="pug">
  .app
    .nav
      headerTop
    router-view 
</template>

<style lang="stylus">

</style>

<script>
import headerTop from './components/header/header-top'
export default {
  components: {
    headerTop
  }
}
</script>
