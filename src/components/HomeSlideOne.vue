<template lang="pug">
  .slide-1
    .text-1( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1.2s" swiper-animate-delay="0.5s" ) {{ $t( "home.slides[0].text_1" ) }}
    .text-2( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="0.8s" swiper-animate-delay="1.8s" ) {{ $t( "home.slides[0].text_2" ) }}
    .text-3( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1.2s" swiper-animate-delay="0.5s" ) {{ $t( "home.slides[0].text_3" ) }}
</template>

<script>
  export default {}
</script>

<style lang="sass">
  .slide-1
    padding: 0 2rem
    color: white
    .text-1
      letter-spacing: 0.04rem
      font-size: 0.76rem
      font-family: 'HYHeiFang', sans-serif
      background-image: -webkit-linear-gradient(bottom, #d2ccd6, #e9e6eb, #ffffff, #f6f6f6)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
    .text-2
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 0.36rem
      margin-top: 0.5rem
      font-size: 0.34rem
      letter-spacing: 0.04rem
      color: rgba(255, 255, 255, 0.8)
      &:before,
      &:after
        content: ''
        display: block
        width: 1.15rem
        height: 0.03rem
        background-color: rgba(255, 255, 255, 0.6)
      &:after
        margin-left: 0.2rem
      &:before
        margin-right: 0.2rem
    .text-3
      margin-top: 0.1rem
      font-size: 0.28rem
      text-align: center
</style>
