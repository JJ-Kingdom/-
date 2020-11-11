<template lang="pug">
  .slide-5
    .phone-wrap
      .icon-wrap( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="2s" swiper-animate-delay="0.5s" )
      .phone( class="ani alias" swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="1s" ) 135-6878-6964
    .contact-wrap
      .title-1
        .line( class="ani alias" swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="1.5s" )
        .text( class="ani alias" swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="0.8s" ) CONTACT US
        .line( class="ani alias" swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="1.5s" )
      .title-2( class="ani alias" swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="1s" ) 联系我们
    .location-wrap
      .icon-location( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="2s" swiper-animate-delay="0.5s" )
      .location( class="ani alias" swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="1s" ) 北京市朝阳区和平街32号314
    home-more.more( path="/user" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="3s" swiper-animate-delay="3s" )
</template>

<script>
import HomeMore from '@/components/HomeMore'

export default {
  name: '',
  data () {
    return {}
  },
  components: {
    HomeMore
  }
}
</script>

<style lang="sass">
  .slide-5
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    position: relative
    width: 12rem
    height: 6.98rem
    color: #e5c998
    .phone-wrap
      text-align: center
      .icon-wrap
        width: 0.8rem
        height: 0.8rem
        background: url('~@/assets/image/home/slide-5-1.png') 00/cover
        margin: 0 auto
      .phone
        margin-top: 0.1rem
        font-size: 0.25rem
        letter-spacing: 0.03rem
    .contact-wrap
      width: 100%
      text-align: center
      .title-1
        display: flex
        justify-content: space-between
        align-items: center
        position: relative
        color: white
        font-size: 0.6rem
        letter-spacing: 0.06rem
        font-weight: bolder
        margin: 0 0.2rem
        .text
          margin: 0 0.95rem
        .line
          flex: 1
          height: 1px
          background-color: #e5c998
      .title-2
        display: inline-block
        font-size: 0.3rem
    .location-wrap
      text-align: center
      .icon-location
        width: 0.71rem
        height: 0.9rem
        background: url('~@/assets/image/home/slide-5-2.png') 00/cover
        margin: 0 auto
      .location
        margin-top: 0.2rem
        font-size: 0.25rem
        letter-spacing: 0.03rem
</style>
