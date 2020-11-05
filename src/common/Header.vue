<template lang="pug">
  header.header-wrap
</template>

<script>
  export default {}
</script>

<style lang="sass">
  .header-wrap
    position: relative
    z-index: 100
    height: 70px
    background-color: rgba(0, 0, 0, 0.3)
  // @media screen and (max-width: 768px)
  //   .header-wrap
  //     height: 46.90px
  @media screen and (max-width: 1200px)
    .header-wrap
      height: 50px
  @media screen and (min-width: 1200px)
    .header-wrap
      height: 70px
</style>
