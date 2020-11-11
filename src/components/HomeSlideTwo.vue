<template lang="pug">
  .slide-2
    .left
      .backdrop( class="ani alias" swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0" )
        .text-1
          .text( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="1s" swiper-animate-delay="0" ) {{ $t( "home.slides[1].text_1" ) }}
          .line( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s" )
        .text-2
          .icon-iphone( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s" )
          .text( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.2s" ) {{ $t( "home.slides[1].text_2" ) }}
      .focus( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="1s" swiper-animate-delay="0.6s" )
    .right
      .about
        .title-1
          p( class="ani alias" swiper-animate-effect="fadeInRightBig" swiper-animate-duration="1s" swiper-animate-delay="0" ) {{ $t( "home.slides[1].text_3" ) }}
          p( class="ani alias" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.4s" ) {{ $t( "home.slides[1].text_4" ) }}
        .title-2( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.4s" ) {{ $t( "home.slides[1].text_5" ) }}
        .title-3( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s" ) {{ $t( "home.slides[1].text_6" ) }}
        .title-4( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.6s" ) {{ $t( "home.slides[1].text_7" ) }}
        .text( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s" ) {{ $t( "home.slides[1].text_8" ) }}
      home-more.more( path="/compony" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1.2s" swiper-animate-delay="2.4s" )
</template>

<script>
  import HomeMore from '@/components/HomeMore'
  export default {
    components: {
      HomeMore
    }
  }
</script>

<style lang="sass">
  .slide-2
    display: flex
    width: 12.00rem
    height: 7.81rem
    justify-content: space-between
    .left
      position: relative
      width: 5.95rem
      height: 100%
      .backdrop
        height: 100%
        background-size: 100% 100%
        background-image: url('~@/assets/image/home/slide-2-1.png')
        .text-1
          position: absolute
          top: 0.40rem
          left: 0.40rem
          display: flex
          align-items: center
          transform: rotate(90deg)
          transform-origin: top left
          color: #ead4a2
          letter-spacing: 0.02rem
          font-size: 0.12rem
          .line
            width: 1.79rem
            height: 1px
            margin-left: 0.21rem
            background-color: #ead4a2
        .text-2
          position: absolute
          left: 0.17rem
          bottom: 0.20rem
          .icon-iphone
            width: 0.38rem
            height: 0.36rem
            background-size: cover
            background-image: url('~@/assets/image/home/iphone.png')
          .text
            color: white
            font-size: 0.12rem
            letter-spacing: 0.02rem
      .focus
        position: absolute
        top: 0
        right: -1.1rem
        bottom: 0
        margin: auto
        width: 5.18rem
        height: 5.18rem
        background-size: 100% 100%
        background-image: url('~@/assets/image/home/slide-2-2.png')
    .right
      width: 4.08rem
      height: 100%
      .about
        padding-top: 1.1rem
        .title-1
          line-height: 1.2
          letter-spacing: 0.07rem
          font-size: 0.6rem
          font-weight: bolder
          color: #dbbc88
        .title-2
          line-height: 0.57rem
          letter-spacing: 0.04rem
          font-size: 0.3rem
          color: white
        .title-3
          line-height: 0.60rem
          letter-spacing: 0.02rem
          font-size: 0.16rem
          font-weight: bolder
          color: #dbbc88
          white-space: nowrap
          &:before
           content: ''
           display: inline-block
           width: 0.52rem
           height: 1px
           margin: 0 0.04rem
           vertical-align: middle
           background-color: #dbbc88
        .title-4
          line-height: 1.5
          letter-spacing: 0.02rem
          color: white
          font-size: 0.14rem
        .text
          padding-top: 0.25rem
          line-height: 1.5
          font-size: 0.14rem
          color: rgba(255, 255, 255, 0.5)
      .more
        margin-top: 0.8rem
</style>
