<template lang="pug">
  .mini-swiper-container( v-on="{ mouseover: swiperOver, mouseout: swiperOut }" )
    swiper.mini-swiper-wrap( :options="swiperOptions" ref="miniSwiper" v-if="show" )
      swiper-slide.mini-slide( v-for="(v, i) in swiperData" :key="v.id" )
        .cover( :style="{ backgroundImage: 'url('+ v.cover +')' }" class="ani mini" swiper-animate-effect="fadeIn" swiper-animate-duration="1.2s" swiper-animate-delay="0" )
        .name( class="ani mini" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.2s" swiper-animate-delay="0.2s" ) {{ v.name }}
        .description( class="ani mini" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.2s" swiper-animate-delay="0.4s" ) {{ v.description }}
        .view-detail( @click="$router.push(v.path)" tag="div" class="ani mini" swiper-animate-effect="fadeIn" swiper-animate-duration="1.2s" swiper-animate-delay="1s" ) 查看详情
    .mini-mask( v-for="(v, i) in swiperData" :class="[v.miniMaskCls, { active: miniCurrentIndex === i }]" )
    .swiper-pagintion
</template>

<script>
  import {
    swiperAnimateCache,
    swiperAnimate
  } from '@/lib/js/swiper-animate.js'

  export default {
    props: {
      isInit: Boolean
    },
    data () {
      const that = this
      return {
        swiperOptions: {
          nested: true,
          speed: 1000,
          direction: 'horizontal',
          pagination : '.swiper-pagintion',
          onInit (swiper) {
            swiperAnimateCache(swiper)
            swiperAnimate(swiper)
          },
          onSlideChangeStart (swiper) {
            that.miniCurrentIndex = swiper.activeIndex
          },
          onTransitionEnd (swiper) {
            swiperAnimate(swiper)
          }
        },
        swiperData: [
          {
            id: 1,
            path: '/product/1/1',
            name: '健康检测智能手环',
            description: '有了它就可以随时随地测量心电、血压趋势、心率等数据，预防心血管疾病的突发风险。',
            cover: require('@/assets/image/home/mini-swiper-1.png'),
            miniMaskCls: 'mini-1'
          },
          {
            id: 2,
            path: '/product/2/1',
            name: '健康检测智能手环',
            description: '有了它就可以随时随地测量心电、血压趋势、心率等数据，预防心血管疾病的突发风险。',
            cover: require('@/assets/image/home/mini-swiper-1.png'),
            miniMaskCls: 'mini-2'
          },
          {
            id: 3,
            path: '/product/3/1',
            name: '健康检测智能手环',
            description: '有了它就可以随时随地测量心电、血压趋势、心率等数据，预防心血管疾病的突发风险。',
            cover: require('@/assets/image/home/mini-swiper-1.png'),
            miniMaskCls: 'mini-3'
          },
          {
            id: 4,
            path: '/product/4/1',
            name: '健康检测智能手环',
            description: '有了它就可以随时随地测量心电、血压趋势、心率等数据，预防心血管疾病的突发风险。',
            cover: require('@/assets/image/home/mini-swiper-1.png'),
            miniMaskCls: 'mini-4'
          }
        ],
        swiperTime: null,
        autoplay: false,
        show: false,
        miniCurrentIndex: 0
      }
    },
    methods: {
      autoplaySwiper () {
        this.timer && clearInterval(this.timer)
        this.timer = setInterval(this.swiperNext, 6000)
      },
      swiperNext () {
        if (this.$refs.miniSwiper.swiper.isEnd) {
          this.swiperTo(0)
        } else {
          this.$refs.miniSwiper && this.$refs.miniSwiper.swiper.slideNext()
        }
      },
      swiperTo (index) {
        this.$refs.miniSwiper && this.$refs.miniSwiper.swiper.slideTo(index, 1000)
      },
      swiperOver () {
        this.autoplay = false
      },
      swiperOut () {
        this.autoplay = true
      },
      clearSwiperTime () {
        this.timer && clearInterval(this.timer)
      }
    },
    watch: {
      autoplay () {
        this.autoplay ? this.autoplaySwiper() : this.clearSwiperTime()
      },
      isInit: {
        immediate: true,
        handler () {
          if (this.isInit && !this.show) {
            setTimeout(() => {
              this.show = true
              this.autoplay = this.isInit
            }, 4000)
          } else {
            this.autoplay = this.isInit
          }
        }
      }
    },
    beforeDestroy () {
      this.autoplay = false
    }
  }
</script>

<style lang="sass">
  .mini-swiper-container
    overflow: hidden
    position: relative
    height: 100%
    .mini-swiper-wrap
      height: 100%
      .mini-slide
        .cover
          width: 2.41rem
          height: 2.82rem
          margin: 0.46rem auto 0 auto
          background-size: 100% 100%
          background-image: url('~@/assets/image/home/mini-swiper-1.png')
        .name
          line-height: 0.3rem
          margin-top: 0.51rem
          font-size: 0.25rem
          color: #e5c998
        .description
          line-height: 0.18rem
          margin-top: 0.14rem
          font-size: 0.13rem
          color: rgba(255, 255, 255, 0.6)
        .view-detail
          width: 1.23rem
          height: 0.37rem
          line-height: 0.37rem
          margin: 0.2rem auto 0 auto
          border: 0.01rem solid white
          border-radius: 0.18rem
          font-size: 0.18rem
          text-align: center
          letter-spacing: 0.02rem
          color: white
          cursor: pointer
          &:hover
           background-color: rgba(255, 255, 255, 0.2) 
        .name,
        .description
          text-align: center
          padding: 0 0.74rem
    .swiper-pagintion
      position: absolute
      top: 3.66rem
      left: 50%
      transform: translateX(-50%)
      display: flex
      .swiper-pagination-bullet
        transition: 800ms
        width: 0.07rem
        height: 0.07rem
        margin: 0 0.04rem
        background-color: rgba(255, 255, 255, 0.4)
        border-radius: 50%
        &.swiper-pagination-bullet-active
          background-color: rgba(255, 255, 255, 1)
    .mini-mask
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      opacity: 0
      transition: opacity 1s
      border-radius: 0.45rem
      &.active
        opacity: 1
      &.mini-1
        background: linear-gradient(0deg, #596691 0%, #9889d7 100%)
      &.mini-2
        background: linear-gradient(0deg, #5ee7df 0%, #596691 100%)
      &.mini-3
        background: linear-gradient(0deg, #b1f4cf 0%, #4facfe 100%)
      &.mini-4
        background: linear-gradient(0deg, #a1c4fd 0%, #b1f4cf 100%)

</style>
