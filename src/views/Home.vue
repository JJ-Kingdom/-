<template lang="pug">
  .home
    home-left.left
    .home-middle
      swiper.swiper-container( :options="swiperOptions" ref="swiper" :notNextTick="true" )
        swiper-slide.slide
          .content
            home-slide-one
        swiper-slide.slide
          .mask( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0")
          .content
            home-slide-two
        swiper-slide.slide
          .mask( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0")
          .content
            home-slide-three( :current-index="currentIndex" )
        swiper-slide.slide
          .mask( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0")
          .content
            home-slide-four
        swiper-slide.slide
          .mask( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0")
          .slide-4-mask( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="2s" swiper-animate-delay="0.5s")
          .content
            home-slide-five
    home-right.right( :current-index="currentIndex" @swiper-prev="swiperPrev" @swiper-next="swiperNext" @swiper-to="swiperTo" )
</template>

<script>
  import {
    swiperAnimateCache,
    swiperAnimate,
    // clearSwiperAnimate
  } from '@/lib/js/swiper-animate.js'

  import HomeLeft from '@/components/HomeLeft'
  import HomeRight from '@/components/HomeRight'
  import HomeSlideOne from '@/components/HomeSlideOne'
  import HomeSlideTwo from '@/components/HomeSlideTwo'
  import HomeSlideThree from '@/components/HomeSlideThree'
  import HomeSlideFour from '@/components/HomeSlideFour'
  import HomeSlideFive from '@/components/HomeSlideFive'

  export default {
    name: 'home',
    data () {
      const that = this
      return {
        swiperOptions: {
          // 滑动速度
          speed: 1000,
          // 滑动方向
          direction: 'vertical',
          // 拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
          threshold: 20,
          // 设置为false，拖动slide时它不会动，当你释放时slide才会切换
          followFinger: false,
          // 设置为true时，能使用鼠标滚轮控制slide滑动
          mousewheelControl: true,
          onInit (swiper) {
            // 隐藏动画元素 
            swiperAnimateCache(swiper)
            // 开始动画
            swiperAnimate(swiper)

            /**
             * 问题：第一屏动画完成后不删除类名的问题，这会导致动画在回到第一屏时会重复过渡的问题
             * 解决：在 Swiper 初始化后开始动画，在动画完毕后删除类名，确保动画只过渡一次
             */
            swiper.slides.eq(swiper.activeIndex).find('.alias').removeClass('ani')
          },
          onSlideChangeStart (swiper) {
            // 更新下标
            that.slideChangeEnd(swiper)
          },
          onTransitionEnd (swiper) {
            // 每个slide切换结束时也运行当前slide动画
            swiperAnimate(swiper)
            // 动画只展现一次，去除ani类名

            swiper.slides.eq(swiper.activeIndex).find('.alias').removeClass('ani')
          }
        },
        currentIndex: 1
      }
    },
    methods: {
      slideChangeEnd (swiperDetail) {
        const { activeIndex } = swiperDetail

        this.currentIndex = activeIndex + 1
      },
      swiperPrev () {
        // 切换至上一屏
        this.$refs.swiper && this.$refs.swiper.swiper.slidePrev()
      },
      swiperNext () {
        // 切换至下一屏
        this.$refs.swiper && this.$refs.swiper.swiper.slideNext()
      },
      swiperTo (index) {
        // 切换至指定屏
        this.$refs.swiper && this.$refs.swiper.swiper.slideTo(index, 1000)
      }
    },
    components: {
      HomeLeft,
      HomeRight,
      HomeSlideOne,
      HomeSlideTwo,
      HomeSlideThree,
      HomeSlideFour,
      HomeSlideFive
    },
    activated () {
      /**
       * 问题：缓存状态下在某一屏链接到其它路由后返回该屏会出现部分动画元素显示不健全的问题
       * 解决：在 activated 重新初始动画元素，并开始播放动画。记得要清除类名，否则还会出现部份动画元素显示不健全或动画完毕后自动消失的问题
       */
      this.$nextTick(() => {
        swiperAnimateCache(this.$refs.swiper.swiper)
        swiperAnimate(this.$refs.swiper.swiper)
        this.$refs.swiper.swiper.slides.eq(this.$refs.swiper.swiper.activeIndex).find('.alias').removeClass('ani')
      })
    }
  }
</script>

<style lang="sass">
  .animate__delay-500ms
    animation-delay: 500ms
  .home
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    .home-middle
      height: 100%
      .swiper-container
        height: 100%
        .slide
          position: relative
          display: flex
          align-items: flex-end
          background-size: 100% 100%
          &:nth-child(1)
            background-image: url('~@/assets/image/home/banner-1.png')
          &:nth-child(2)
            background-image: url('~@/assets/image/home/banner-2.png')
            .mask
              &:after
                background-image: url('~@/assets/image/home/banner-2.png')
          &:nth-child(3)
            background-image: url('~@/assets/image/home/banner-3.png')
            .mask
              &:after
                background-image: url('~@/assets/image/home/banner-3.png')
          &:nth-child(4)
            background-image: url('~@/assets/image/home/banner-4.png')
            .mask
              &:after
                background-image: url('~@/assets/image/home/banner-4.png')
          &:nth-child(5)
            background-image: url('~@/assets/image/home/banner-5.png')
            .mask
              &:after
                background-image: url('~@/assets/image/home/banner-5.png')
          .mask
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            width: 15.06rem
            height: 100%
            margin: auto
            &:before
              content: ''
              position: absolute
              top: 0
              left: 0
              right: 0
              bottom: 0
              z-index: 2
              background-color: rgba(255, 255, 255, 0.1)
            &:after
              content: ''
              display: block
              position: absolute
              top: 0
              left: 0
              right: 0
              bottom: 0
              z-index: 1
              background-size: 100vw 100vh
              filter: blur(2px)
          .slide-4-mask
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            z-index: 100
            margin: auto
            width: 16.36rem
            height: 9.15rem
            background: url('~@/assets/image/home/slide-5-3.png') 00/100% 100%
          .content
            overflow: hidden
            display: flex
            align-items: center
            justify-content: center
            position: relative
            z-index: 10
            width: 15.06rem
            height: 100%
            margin: 0 auto
  @media screen and (max-width: 1200px)
    .home
      .home-middle
        .swiper-container
          .swiper-slide
            .content
              height: calc(100% - 50px)
  @media screen and (min-width: 1200px)
    .home
      .home-middle
        .swiper-container
          .swiper-slide
            .content
              height: calc(100% - 70px)
  @media screen and (max-width: 768px)
    .home
      .home-left,
      .home-right
        display: none
</style>
