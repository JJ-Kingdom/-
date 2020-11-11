<template lang="pug">
  router-link.more-wrap( :to="path" )
    .text More
      .arrow
</template>

<script>
  export default {
    props: {
      path: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="sass">
  .more-wrap
    position: relative
    display: flex
    align-items: flex-end
    justify-content: flex-end
    width: 1.62rem
    height: 0.43rem
    line-height: 0.43rem
    border-radius: 0.04rem
    border: solid 1px #dbbc88
    color: white
    .text
      transition: all 300ms
      display: flex
      align-items: center
      justify-content: space-around
      width: 1.48rem
      height: 0.33rem
      letter-spacing: 0.02rem
      font-size: 0.15rem
      white-space: nowrap
      .arrow
        animation: homeMore 700ms alternate infinite linear
        animation-play-state: paused
        width: 0.52rem
        height: 0.05rem
        background: url('~@/assets/image/home/more.png') 00/100% 100%
    &:after
      content: ''
      display: inline-block
      position: absolute
      top: 0.07rem
      left: 0.11rem
      width: 100%
      height: 100%
      border-radius: 0.04rem
      border: solid 1px #dbbc88
    &:hover
      .text
        background-color: rgba(219, 188, 136, 0.3)
        .arrow
          animation-play-state: running
@keyframes homeMore
  0%
    transform: translateX(-20%)
  100%
    transform: translateX(0%)
</style>
