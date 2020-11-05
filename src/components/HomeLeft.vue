<template lang="pug">
.home-left( class="animated fadeInLeft" )
  .wrap
    .fangkuan
    .text SLIDING
    .line
    .mouse
</template>

<script>
  export default {}
</script>

<style lang="sass">
.home-left
  position: absolute
  top: 0
  left: 0
  z-index: 10
  width: 2.05rem
  height: 100%
  .wrap
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    height: 100%
    .fangkuan
      width: 1.08rem
      height: 1.03rem
      background-image: url('~@/assets/image/home/fangkuan.png')
      background-size: 100% 100%
    .text
      transform: rotate(90deg)
      color: white
      font-size: 0.21rem
    .line
      width: 1px
      height: 2.62rem
      margin-top: 0.30rem
      border-left: 1px dashed white
      background-size: 100% 100%
    .mouse
      width: 0.22rem
      height: 0.33rem
      margin-top: 0.13rem
      background-image: url('~@/assets/image/home/mouse.png')
      background-size: cover
</style>
