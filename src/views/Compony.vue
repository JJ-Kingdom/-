<template lang="pug">
.compony
  .backbox 
  .box
  main
    .titlebox.animate__animated.animate__fadeInDown.animate__delay-1s
      h1 BRAND INTRODUCTION
      //- div {{ $t( "compony.title" ) }}
    .centent
      .leftimgbox
        .bgbox.animate__animated.animate__fadeInLeft.animate__delay-1s
        .imgbox.animate__animated.animate__fadeInRight.animate__delay-1s
      .righttextbox.animate__animated.animate__fadeIn.animate__delay-2s
        h2 煊赫电子商务有限公司
        .sceroll-box
          .companyprofile(ref="wrapper")
            .better-box
              p 公司以“专注，用心，服务”为核心价值，通过我们的专业水平和不懈努力，为广大消费者提供优质的服务。
              p 多年来，北京煊赫电子商务有限公司一直秉承以用户需求为核心，在专注以产品零售和批发行业为基础的同时，提供用心周到的服务，赢得了众多消费者的信赖和好评。
              p 我们公司不仅仅提供专业细致的服务，同时还建立了完善的售后服务体系，我们公司主营业务乳胶系列产品赢得了众多消费者的青睐。
              p 我们相信，通过我们的不断努力和追求，
              p 一定能够实现互利共赢。而且我们非常重视培养人才，实行任人唯贤的人力资源政策，积极培养有理想、有道德、有责任感、有协作精神的现代化员工队伍，同时积极引进先进的管理理念，采用规范化、科学化的管理方法不断壮大自身实力。
              p 我们始终坚持人才与企业共同发展的理念，关注员工的技能培训及发展，并不断加强企业文化的营建。
              p 用心打交道，全心全意服务客户，公司业务得了持续高速发展，也为员工提供了极大的发展空间。
              p 多元化的企业文化、以人为本的经营管理理念证明了我们是一个良好的发展平台。
              p 我们始终努力做一群因为谦逊、开放、努力而拥有真正自信的人。
</template>
<script>
import BScroll from "better-scroll";

export default {
  mounted() {
    console.log(this)
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        bounce: true,
      });
    });
  },
};
</script>
<style lang="sass">
.compony
  overflow: hidden
  width: 100vw
  height: 100vh 
  position: absolute
  top:0
  left:0
  background-image: url('../assets/image/背景.png')
  background-size: cover
  background-position: center 
  z-index: 0
  .backbox
    z-index: 1
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0,0 ,0 ,.6 )

  .box
    position: relative
    width: 80%
    margin: auto
    height: 100%
    filter: blur(3px)
    overflow: hidden
    background-image: url('../assets/image/背景.png')
    background-size: cover
    background-position: center
    &::before
      content: ''
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      background: rgba(255,255,255,.3)
      box-shadow: inset
  main
    position: absolute
    top: 1.63rem
    left: 50%
    transform: translateX(-50%)
    z-index: 10
    width: 80%
    .titlebox
      text-align: center
      color: #fff 
      h1
        font-size: .6rem
        font-weight: 900
      div
        font-size: .3rem
        color: #f1daa7
    .centent
      display: flex
      padding: 64px
      .leftimgbox
        width: 5rem
        height: 5.21rem
        position: relative
        .bgbox
          position: absolute
          width: 100%
          height: 100%
          background: linear-gradient(0deg, #488ce9 1%, #2479f4 37%, #0066ff 100%)
          opacity: .24
          border-radius: .64rem
          
        .imgbox
          position: absolute
          left: 10%
          top: 8%
          width: 5rem
          height: 5.21rem
          border-radius: .64rem
          background-image: url("../assets/image/图层24.png")
      .righttextbox
        width: 7rem
        margin-left: .77rem
        h2
          font-size: .51rem
          line-height: .42rem
          color: #f1daa7
          margin-top: 1rem
        .sceroll-box
          display: flex
          margin-top: .46rem
          overflow: hidden
          .companyprofile
            overflow: hidden
            width: 6.21rem
            height: 3.92rem
            font-size: .17rem
            color: #fff
            line-height: .32rem
          .better
            width: .05rem
            height: 2rem
            background: #ffffff
            opacity: 2

</style>