<template lang="pug">
  .slide-4
    .title-wrap
      .title-1( class="ani alias" swiper-animate-effect="fadeInRightBig" swiper-animate-duration="2s" swiper-animate-delay="0" ) 新闻资讯
      .title-2( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="2s" swiper-animate-delay="0.5s" ) NEWS AND INFORMATION
    .focus-1
      .left( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="1.3s" swiper-animate-delay="1.6s" )
      .right( class="ani alias" swiper-animate-effect="fadeInUpBig" swiper-animate-duration="1s" swiper-animate-delay="1s" )
        .wrap
          .date
            .month( class="ani alias" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.3s" swiper-animate-delay="1.3s" ) 07-03
            .full-yeach( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2s" ) 2019
          .focus-title-wrap( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2.4s" )
            .title-1 首月销售红火
            .title-2 ———多渠道营销带来业绩大
          .text( class="ani alias" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2.8s" ) 经宁波远东资信评估有限公司专家评审委员会评定，我公司资信等级为AAA级，这是我公司连续数年蝉联AAA级资信企业
          router-link.view-detail( to="/journalism/journalismDetail" class="ani alias" tag="div" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="3.5s" ) 查看详情
    .focus-2( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1.3s" swiper-animate-delay="3.3s" )
      .new-wrap
        ul.new-group
          li.new( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="4s" )
            .date-wrap
              .date 31
              .full-year 2019.06
            .new-detail
              .title 首月销售红火———多渠道营销带来业绩大
              .detail 正当其他家纺企业通过缩减生产、裁员、降薪等方
          li.new( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="4.3s" )
            .date-wrap
              .date 30
              .full-year 2019.06
            .new-detail
              .title 首月销售红火———多渠道营销带来业绩大
              .detail 正当其他家纺企业通过缩减生产、裁员、降薪等方
          li.new( class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="4.6s" )
            .date-wrap
              .date 29
              .full-year 2019.06
            .new-detail
              .title 首月销售红火———多渠道营销带来业绩大
              .detail 正当其他家纺企业通过缩减生产、裁员、降薪等方
    home-more.more( path="/journalism" class="ani alias" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="5s" )
</template>

<script>
  import HomeMore from '@/components/HomeMore'
  export default {
    data () {
      return {}
    },
    components: {
      HomeMore
    }
  }
</script>

<style lang="sass">
  .slide-4
    display: flex
    position: relative
    width: 12rem
    height: 6.98rem
    .title-wrap
      position: absolute
      top: 0
      right: 0
      .title-1
        font-size: 0.29rem
        color: #e5c998
      .title-2
        font-weight: bolder
        font-size: 0.6rem
        color: white
    .focus-1
      position: relative
      top: 0.9rem
      left: 0
      width: 6.92rem
      height: 100%
      .left
        position: absolute
        top: 0
        left: 0
        z-index: 2
        width: 3.65rem
        height: 3.20rem
        background: url('~@/assets/image/home/slide-4-1.jpg') 00/cover
        border-radius: 0.35rem
      .right
        position: absolute
        top: 0.7rem
        right: 0
        z-index: 1
        display: flex
        flex-direction: column
        align-items: flex-end
        width: 6.59rem
        height: 3.90rem
        background-image: linear-gradient(43deg, #69c0eb 0%, #447ae8 100%)
        border-radius: 0.52rem
        color: white
        .wrap
          width: 50%
          padding: 0.3rem
          .date
            display: flex
            align-items: flex-end
            .month
              font-size: 0.27rem
            .full-yeach
              padding: 0 0.08rem
              font-size: 0.17rem
              color: rgba(255, 255, 255, 0.7)
          .focus-title-wrap
            font-size: 0.16rem
            margin-top: 0.2rem
            .title-2
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
          .text
            margin-top: 0.21rem
            font-size: 0.14rem
            line-height: 1.4
            color: rgba(255, 255, 255, 0.5)
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 3
          .view-detail
            display: inline-block
            padding: 0.07rem 0.3rem
            border: solid 1px #ffffff
            font-size: 0.17rem
            cursor: pointer
            margin-top: 0.3rem
            &:hover
              background-color: rgba(255, 255, 255, 0.3)
    .focus-2
      display: flex
      justify-content: flex-end
      position: absolute
      top: 2.4rem
      right: 0
      width: 7.72rem
      height: 4.42rem
      background-color: #37b1ff
      border-radius: 0.51rem
      .new-wrap
        width: 64%
        color: white
        .new-group
          display: flex
          flex-direction: column
          justify-content: space-around
          padding: 0.3rem 0.3rem 0.3rem 0.2rem
          height: 100%
          .new
            display: flex
            .date-wrap
              padding-right: 0.1rem
              border-right: 1px solid white
              text-align: center
              .date
                font-weight: bolder
                font-size: 0.43rem
              .full-year
                font-size: 0.16rem
            .new-detail
              flex: 1
              display: flex
              flex-direction: column
              justify-content: space-around
              overflow: hidden
              padding-left: 0.2rem
              .title
                font-size: 0.16rem
                font-weight: bolder
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
              .detail
                font-size: 0.14rem
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
    .more
      position: absolute
      top: 6rem
      left: 1.5rem
</style>
