<template lang="pug">
  .journalism
    .model
      template(v-if='$route.meta.show')
        el-breadcrumb(separator-class="el-icon-arrow-right" class='title')
          el-breadcrumb-item 首页
          el-breadcrumb-item(:to="{path:'/journalism'}") 新闻资讯
        p.title_sub(class='animate__animated animate__fadeInLeft') NEWS AND INFOORMATION
        p.content_title(class='animate__animated animate__fadeInRight') 新闻资讯
        .content
          .left
            .one
              .content_a(class='animate__animated animate__fadeInLeft')
                .img(class='animate__animated animate__fadeIn')
                .info
                  router-link(class='animate__animated animate__fadeInDown hover' tag='p' to='/journalism/journalismDetail' @click='$route.meta.show = false') 煊赫集团发布2019年度社会责任报告...
                  p(class='animate__animated animate__fadeInUp') 6月31日，公司以"专注，用心，服务"为核心价值，为广大消费者提供优质的服务。
              .content_b(class='animate__animated animate__fadeInLeft')
                .img2(class='animate__animated animate__fadeIn')
                .info
                  p(class='animate__animated animate__fadeInDown hover') 煊赫集团参加2019中国国际进口博览会...
                  p(class='animate__animated animate__fadeInUp') 多年来，北京煊赫电子商务有限公司一直秉承以用户需求为核心，提供周到的服务，赢得了消费者的信赖和好评。

          .line(class='animate__animated animate__fadeIn')
            span(class='animate__animated animate__fadeInUpBig')
              h5 2019.06.31
            span(class='animate__animated animate__fadeInUpBig')
              h5 2019.06.24
            span(class='animate__animated animate__fadeInUpBig')
              h5 2019.06.08
            span(class='animate__animated animate__fadeInUpBig')
              h5 2019.05.26
          .right
            .content_c(class='animate__animated animate__fadeInRight hover')
              .info
                p(class='animate__animated animate__fadeInDown') 煊赫召开"不忘初心，牢记使命"主题动员...
                p(class='animate__animated animate__fadeInUp') 我们公司不仅仅提供专业细致的服务，同时还建立了完善的售后服务体系。
              .img3(class='animate__animated animate__fadeIn')
            .content_d(class='animate__animated animate__fadeInRight')
              .info
                p(lass='animate__animated animate__fadeInDown') 首月销售红火多渠道营销带来业绩大会...
                p(lass='animate__animated animate__fadeInUp') 用心打交道，全心全意服务客户，公司业务得到持续高速发展，也为员工提供了极大的发展空间。
              .img4(class='animate__animated animate__fadeIn')
      router-view(v-else)
</template>

<script>
export default { }
</script>

<style lang="sass">
  .journalism
      width: 100vw
      height: 100vh
      background: url(~@/assets/image/bg.png) no-repeat
      background-position: -62px 0
      overflow: hidden
      .model
        width: 90vw
        height: 100vh
        background: url('~@/assets/image/bg_model.png') no-repeat
        margin: 0 auto
        .title
          width: 85vw
          font-size: 0.2rem
          font-weight: 700
          padding-top: 1.3rem
          margin-left: 2rem
          margin-bottom: .1rem
          .el-breadcrumb__inner
            color: #fff
          .el-breadcrumb__inner.is-link
            color: #cdb990
        .title_sub
          width: 90vw
          text-align: center
          font-size: .8rem
          animation-delay: .7s
        .content_title
          font-size: .2rem
          width: 90vw
          text-align: center
          color: #cdb990
          animation-delay: .7s
        .content
          width: 90vw
          height: 8.5rem
          margin: 0 auto
          display: flex
          .left
            width: 50%
            height: 100%
            margin-top: .1rem
            align-self: flex-start
            .one
              width: 100%
              .content_a
                width: 6rem
                height: 2.5rem
                background: #525572
                opacity: .9
                border-radius: .5rem
                animation-delay: 2.5s
                margin: .7rem 0 0 1.2rem 
                display: flex
                .img
                  width: 2rem
                  height: 1.8rem
                  background: url(~@/assets/image/left-1.png)
                  border-radius: .4rem
                  animation-delay: 3.2s
                  margin-left: -1rem
                  margin-top: .35rem
                  background-position: -.4rem -.2rem
                .info
                  width: 4.9rem
                  p
                    &:nth-child(1)
                      font-size: .25rem
                      font-weight: 700
                      margin: .6rem 0 0 .2rem
                    &:hover
                      color: #cdb990
                    &:nth-child(2)
                      font-size: .23rem
                      margin: .2rem 0 0 .2rem
              .content_b
                width: 6rem
                height: 2.5rem
                background: #3c1a36
                opacity: .9
                border-radius: .5rem
                animation-delay: 2.5s
                display: flex
                margin: 1.7rem 0 0 1.2rem 
                .img2
                  width: 2rem
                  height: 1.8rem
                  background: url(~@/assets/image/left-2.png)
                  border-radius: .4rem
                  animation-delay: 3.2s
                  margin-left: -1rem
                  margin-top: .35rem
                  background-position: -.4rem -.2rem
                .info
                  width: 4.9rem
                  p
                    &:nth-child(1)
                      font-size: .25rem
                      font-weight: 700
                      margin: .6rem 0 0 .2rem
                    &:nth-child(2)
                      font-size: .23rem
                      margin: .2rem 0 0 .2rem
          .line
            width: .01rem
            height: 8rem
            background: rgba(255, 255, 255, .2)
            margin: 0 auto
            display: flex
            flex-direction: column
            position: relative
            align-self: center
            animation-delay: .5s
            span
              width: .2rem
              height: .2rem
              border-radius: 50%
              background: #9d9899
              margin-left: -.1rem 
              position: relative
              h5
                font-size: .2rem
                position: absolute
              &:nth-child(1) h5
                left: -1.2rem
                top: -.05rem
              &:nth-child(2) h5
                left: .4rem
                top: -.02rem
              &:nth-child(3) h5
                left: -1.2rem
                top: -.05rem
              &:nth-child(4) h5
                left: .4rem
                top: -.02rem
              &:nth-child(1)
                animation-duration: 2s
                animation-delay: .8s
                margin-top: 1rem
              &:nth-child(2)
                animation-duration: 2s
                animation-delay: 1s
                margin-top: 2rem
              &:nth-child(3)
                animation-duration: 2s
                animation-delay: 1.2s
                margin-top: 2rem
              &:nth-child(4)
                animation-duration: 2s
                animation-delay: 1.4s
                margin-top: 2rem
          .right
            width: 45vw
            height: 100%
            align-self: flex-end
            .content_c
              width: 6rem
              height: 2.5rem
              background: #3d644f
              opacity: .6
              border-radius: .5rem
              animation-delay: 2.5s
              display: flex
              margin: 1.5rem 0 0 1.6rem
              .img3
                width: 2rem
                height: 1.8rem
                background: url(~@/assets/image/right-1.png)
                border-radius: .4rem
                z-index: 99
                animation-delay: 3.2s
                margin-top: .35rem
                margin-right: -1rem
                background-position: -.8rem -.2rem
            .content_d
              width: 6rem
              height: 2.5rem
              background: #664b21
              opacity: .9
              border-radius: .5rem
              animation-delay: 2.5s
              display: flex
              margin: 1.5rem 0 0 1.6rem
              .img4
                width: 2rem
                height: 1.8rem
                background: url(~@/assets/image/right-2.png)
                border-radius: .4rem
                animation-delay: 3.2s
                margin-top: .35rem
                margin-right: -1rem
                background-position: -1.2rem -.2rem
            .info
                  width: 4.9rem
                  p
                    &:nth-child(1)
                      font-size: .23rem
                      font-weight: 700
                      margin: .6rem 0 0 .2rem
                    &:nth-child(2)
                      font-size: .23rem
                      margin: .2rem 0 0 .2rem
        .page 
          width: 100%
          font-size: .2rem
          display: flex
          width: 4rem
          margin: 0 auto
          margin-top: .6rem
          justify-content: space-around
          li
            width: 1rem
            height: .5rem
            border: 1px solid rgba(255, 255, 255, .4)
            margin-left: .1rem
            line-height: .5rem
            text-align: center
            &:nth-child(3)
              background: #fff
              color: #333
.slide-enter-active, .slide-leave-active
  transition: all .3s ease-in-out

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>

