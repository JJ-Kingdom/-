<template lang="pug">
  .slide-3
    .left
      .header
        .title-1
          span.text( class="ani alias" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0" ) {{ $t( "home.slides[2].text_1" ) }}
        .title-2( class="ani alias" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0" ) {{ $t( "home.slides[2].text_2" ) }}
      .search-wrap( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.7s" )
        input.ipt( :placeholder="$t('home.slides[2].text_3')" )
        .icon-search
      .classify
        .title( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="0.7s" swiper-animate-delay="0.4s" ) {{ $t( "home.slides[2].text_4" ) }}
        .classify-grop
          router-link.item( to="/product/1" tag="div" id="test" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="1.3s")
          router-link.item( to="/product/2" tag="div" id="test" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="1.7s")
          router-link.item( to="/product/3" tag="div" id="test" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="2s")
          router-link.item( to="/product/4" tag="div" id="test" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="2.4s")
    .left-mask( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="0.7s" swiper-animate-delay="0" )
    .right( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="2s" swiper-animate-delay="2.7s" )
      //- .swiper-no-swiping 是 swiper 提供的类名，作用是禁止拖拽
      home-mini-swiper( :isInit="currentIndex === 3 && $route.fullPath === '/home'" )
    home-more.more( path="/product" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="4s" )
</template>

<script>
  import HomeMore from '@/components/HomeMore'
  import HomeMiniSwiper from '@/components/HomeMiniSwiper'
  export default {
    props: {
      currentIndex: Number
    },
    components: {
      HomeMore,
      HomeMiniSwiper
    }
  }
</script>

<style lang="sass">
  .slide-3
    position: relative
    width: 12rem
    height: 6.98rem
    .left
      position: absolute
      top: 0
      left: 0
      z-index: 1
      width: 8.77rem
      height: 5.65rem
      padding: 0.33rem 0 0 0.35rem
      .header
        .title-1
          height: 0.52rem
          font-size: 0.3rem
          letter-spacing: 0.03rem
          color: #dbbc88
          .text
            display: inline-block
            height: 100%
            border-bottom: 0.02rem solid #dbbc88
        .title-2
          font-size: 0.6rem
          font-weight: bolder
          letter-spacing: 0.06rem
          color: white
      .search-wrap
        display: flex
        width: 6.08rem
        height: 0.62rem
        margin-top: 0.4rem
        border: 1px solid white
        .ipt
          flex: 1
          height: 100%
          text-indent: 0.24rem
          font-size: 0.21rem
          background-color: transparent
          color: rgba(255, 255, 255, 0.4)
        .icon-search
          width: 0.4rem
          height: 0.4rem
          margin: auto 0.31rem
          background: url('~@/assets/image/home/search.png') 00/cover
      .classify
        margin-top: 0.6rem
        .title
          font-size: 0.18rem
          color: white
        .classify-grop
          display: flex
          margin-top: 0.18rem
          .item
            width: 1.08rem
            height: 1.17rem
            margin-right: 0.43rem
            background-size: cover
            background-position-y: -100%
            &:nth-child(1)
              background-image: url('~@/assets/image/home/slide-3-2-sprite.png')
            &:nth-child(2)
              background-image: url('~@/assets/image/home/slide-3-3-sprite.png')
            &:nth-child(3)
              background-image: url('~@/assets/image/home/slide-3-4-sprite.png')
            &:nth-child(4)
              background-image: url('~@/assets/image/home/slide-3-5-sprite.png')
            &:hover
              background-position-y: 0
    .left-mask
      position: absolute
      top: 0
      left: 0
      width: 8.77rem
      height: 5.65rem
      padding: 0.33rem 0 0 0.35rem
      border-radius: 0.34rem
      background: url('~@/assets/image/home/slide-3-1.png') 00/cover
    .right
      position: absolute
      right: 0
      bottom: 0
      width: 4.8rem
      min-height: 5.53rem
    .more
      position: absolute
      top: 6rem
      left: 1.5rem
</style>
