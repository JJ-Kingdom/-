<template lang="pug">
  .slide-2
    .left
      .backdrop( class="ani alias" swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0" )
        .text-1
          .text( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="1s" swiper-animate-delay="0" ) GO FURTHER
          .line( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s" )
        .text-2
          .icon-iphone( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s" )
          .text( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.2s" ) 135-6829-1328
      .focus( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="1s" swiper-animate-delay="0.6s" )
    .right
      .about
        .title-1
          p( class="ani alias" swiper-animate-effect="fadeInRightBig" swiper-animate-duration="1s" swiper-animate-delay="0" ) ABOUT
          p( class="ani alias" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.4s" ) US
        .title-2( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.4s" ) 关于我们
        .title-3( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s" ) 煊赫电子商务有限公司
        .title-4( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.6s" ) 施运营和管理，支持深化“轨道+物业”发展模式
        .text( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s" ) 始终坚持为普通人提供好产品、好服务，通过自身努力，为满人民对美好生活的各方面需求，做出力所能及的贡献。2018年，公司将自身定位进一步迭代升级为“城乡建设与生活服务商”，所搭建的生态体系已初具规模。
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
          display: flex
          align-items: center
          transform: translate(0.37rem, 0.37rem) rotate(90deg)
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
          line-height: 0.57rem
          letter-spacing: 0.02rem
          font-size: 0.16rem
          font-weight: bolder
          color: #dbbc88
          &:before
           content: ''
           display: inline-block
           width: 0.52rem
           height: 0.02rem
           margin: 0 0.04rem
           vertical-align: middle
           background-color: #dbbc88
        .title-4
          line-height: 0.57rem
          letter-spacing: 0.02rem
          color: white
          font-size: 0.14rem
        .text
          line-height: 1.4
          font-size: 0.14rem
          color: rgba(255, 255, 255, 0.5)
      .more
        margin-top: 1.39rem
</style>
