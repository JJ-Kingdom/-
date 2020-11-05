<template lang="pug">
.home-right( class="animated fadeInRight")
  .wrap
    ul.indicator-wrap
      li.indicator( :class="{ active: currentIndex === i }" @click="$emit('swiper-to', i - 1)" v-for="i in 5" :key="i" )
      .line
      .page-wrap
        .top
          .current-page {{ currentIndex }}
          .bias
          .total-page 5
        .text PAGE
      .btn-wrap
        .prev( @click="$emit('swiper-prev')" )
          i.el-icon-arrow-up
        .next( @click="$emit('swiper-next')" )
          i.el-icon-arrow-down
</template>

<script>
  export default {
    props: {
      currentIndex: {
        type: Number,
        default: 1
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="sass">
.home-right
  position: absolute
  top: 0
  right: 0
  z-index: 10
  width: 2.05rem
  height: 100%
  .wrap
    position: relative
    height: 100%
    .indicator-wrap
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      .indicator
        transition: 500ms
        width: 0.16rem
        height: 0.16rem
        margin: 0.16rem 0
        background-color: white
        border: 0.02rem solid transparent
        border-radius: 50%
        &.active
          display: flex
          justify-content: center
          align-items: center
          width: 0.20rem
          height: 0.20rem
          background-color: transparent
          border-color: #f7dfab
          box-shadow: 0 0 0 0.06rem rgba(255, 255, 255, 0.2)
          &:after
            transition: 500ms 
            width: 70%
            height: 70%
            background-color: #f7dfab
        &:after
          content: ''
          display: block
          width: 100%
          height: 100%
          border-radius: 50%
          background-color: white
      .line
          width: 0.015rem
          height: 0.67rem
          background-color: rgba(255, 255, 255, 0.6)
      .page-wrap
        color: white
        .top
          position: relative
          display: flex
          justify-content: center
          margin-top: 0.15rem
          .current-page
            font-size: 0.51rem
          .bias
            width: 0.24rem
            height: 0.44rem
            transform: translateX(50%)
            &:before
              content: ''
              display: block
              transform: rotate(-30deg)
              width: 1px
              height: 100%
              background-color: rgba(255, 255, 255, 0.6)
          .total-page
            font-size: 0.19rem
        .text
          width: 0.7rem
          font-size: 0.19rem
      .btn-wrap
        width: 0.7rem
        .prev,
        .next
          transform: translateX(60%)
          width: 0.19rem
          height: 0.19rem
          line-height: 0.19rem
          margin-top: 0.15rem
          background-color: rgba(255, 255, 255, 0.3)
          border-radius: 50%
          align-self: flex-start
          text-align: center
          font-size: 0.14rem
          cursor: pointer
          &:hover
            background-color: white
          i
            font-weight: bolder
</style>
