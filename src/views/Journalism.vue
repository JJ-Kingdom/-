<template lang="pug">
  .journalism
    .model
      template(v-if='$route.meta.show')
        el-breadcrumb(separator-class="el-icon-arrow-right" class='title')
          el-breadcrumb-item {{$t('indexPage')}}
          el-breadcrumb-item(:to="{path:'/journalism'}") {{$t('subPage')}}
        p.title_sub(class='animate__animated animate__fadeInLeft') NEWS AND INFOORMATION
        p.content_title(class='animate__animated animate__fadeInRight') {{$t('subPage')}}
        .content_jour
          .left
              .content_a(class='animate__animated animate__fadeInLeft')
                .img(class='animate__animated animate__fadeIn')
                .info
                  router-link(class='animate__animated animate__fadeInDown hover' tag='p' to='/journalism/journalismDetail' @click='$route.meta.show = false') {{$t('modulLeftTile')}}
                  p(class='animate__animated animate__fadeInUp') {{$t('moduLeftContent')}}
              .content_b(class='animate__animated animate__fadeInLeft')
                .img2(class='animate__animated animate__fadeIn')
                .info
                  p(class='animate__animated animate__fadeInDown hover') {{$t('moduLeftTile2')}}
                  p(class='animate__animated animate__fadeInUp') {{$t('moduLeftContent2')}}

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
                p(class='animate__animated animate__fadeInDown') {{$t('modulRightTile')}}
                p(class='animate__animated animate__fadeInUp') {{$t('modulRightContent')}}
              .img3(class='animate__animated animate__fadeIn')
            .content_d(class='animate__animated animate__fadeInRight')
              .info
                p(class='animate__animated animate__fadeInDown') {{$t('modulRightTile2')}}
                p(class='animate__animated animate__fadeInUp') {{$t('modulRightContent2')}}
              .img4(class='animate__animated animate__fadeIn')
        ul.page
          li {{$t('bottomIndex')}}
          li {{$t('bottomPrev')}}
          li {{$t('bottomCurrent')}}
          li {{$t('bottomNext')}}
          li {{$t('bottomEnd')}}
      router-view(v-else)
      
</template>

<script>
export default { 
}
</script>

<style lang="sass">
  .journalism
      width: 100vw
      height: 100vh
      background: url(~@/assets/image/bg.png) no-repeat
      background-position: -6vw 0
      overflow: hidden
      color: #fff
      position: absolute
      top: 0
      left: 0
      padding-top: 1.28rem
      .model
        width: 90vw
        height: 100vh
        background: url('~@/assets/image/bg_model.png') no-repeat
        margin: 0 auto
        .title
          width: 85vw
          font-size: 0.2rem
          font-weight: 700
          margin-left: 2rem
          padding-top: 3vh
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
          margin-top: 1%
        .content_jour
          width: 90vw
          height: 65vh
          display: flex
          justify-content: space-around
          .left
            width: 50%
            height: 80%
            align-self: flex-start
            .content_a
              width: 31vw
              background: #525572
              opacity: .9
              border-radius: .4rem
              animation-delay: 2.5s
              margin: .1rem 0 0 1.2rem 
              display: flex
              align-items: center
              padding: 1vw 0
              .img
                width: 10vw
                height: 12vh
                background: url(~@/assets/image/left-1.png) no-repeat
                background-size: 100% 100%
                border-radius: 20%
                animation-delay: 3.2s
                margin-left: -5vw
              .info
                width: 24vw
                p
                  &:nth-child(1)
                    font-size: .25rem
                    font-weight: 700
                    padding-left: 6% 
                    animation-delay: 3s
                  &:hover
                    color: #cdb990
                  &:nth-child(2)
                    font-size: .23rem
                    padding-left: 6%
                    padding-top: 3%
                    animation-delay: 3s
            .content_b
              width: 31vw
              background: #3c1a36
              opacity: .9
              border-radius: .5rem
              animation-delay: 2.7s
              display: flex
              align-items: center
              margin: 1.7rem 0 0 1.2rem
              padding: 1vw 0
              .img2
                width: 10vw
                height: 12vh
                background: url(~@/assets/image/left-2.png) no-repeat
                background-size: 100% 100%
                border-radius: 20%
                animation-delay: 3.2s
                margin-left: -5vw
              .info
                width: 26vw
                p
                  &:nth-child(1)
                    font-size: .25rem
                    font-weight: 700
                    padding-left: 6% 
                    animation-delay: 3s
                  &:nth-child(2)
                    font-size: .23rem
                    padding-left: 6% 
                    padding-top: 3% 
                    animation-delay: 3s
          .line
            width: .1vw
            height: 55vh
            background: rgba(255, 255, 255, .2)
            display: flex
            align-items: center
            flex-direction: column
            position: relative
            justify-content: space-around
            animation-delay: .5s
            margin-top: 2%
            span
              width: 1vw
              height: 1.3vh
              border-radius: 50%
              background: #9d9899
              position: relative
              h5
                font-size: .2rem
                position: absolute
                white-space: nowrap
              &:nth-child(1) h5
                left: -6vw
                top: -.2vh
              &:nth-child(2) h5
                left: 1.7vw
                top: -.2vh
              &:nth-child(3) h5
                left: -6vw
                top: -.2vh
              &:nth-child(4) h5
                left: 1.7vw
                top: -.2vh
              &:nth-child(1)
                animation-duration: 2s
                animation-delay: .8s
              &:nth-child(2)
                animation-duration: 2s
                animation-delay: 1s
              &:nth-child(3)
                animation-duration: 2s
                animation-delay: 1.2s
              &:nth-child(4)
                animation-duration: 2s
                animation-delay: 1.4s
          .right
            width: 45vw
            height: 80%
            .content_c
              width: 31vw
              padding: 1vw 0
              background: #3d644f
              opacity: .6
              border-radius: .5rem
              animation-delay: 2.9s
              display: flex
              align-items: center
              margin: 1rem 0 0 1.6rem
              .img3
                width: 10vw
                height: 12vh
                background: url(~@/assets/image/right-1.png) no-repeat
                background-size: 100% 100%
                border-radius: 20%
                animation-delay: 3.2s
                margin-right: -10vw
            .content_d
              width: 31vw
              padding: 1vw 0
              background: #664b21
              opacity: .9
              border-radius: .5rem
              animation-delay: 3.1s
              display: flex
              align-items: center
              margin: 2rem 0 0 1.6rem
              .img4
                width: 10vw
                height: 12vh
                background: url(~@/assets/image/right-2.png) no-repeat
                background-size: 100% 100%
                border-radius: 20%
                animation-delay: 3.2s
                margin-right: -10vw
            .info
                  width: 25vw
                  p
                    &:nth-child(1)
                      font-size: .23rem
                      font-weight: 700
                      padding-left: 6%
                      animation-delay: 3s
                    &:nth-child(2)
                      font-size: .23rem
                      padding-left: 6%
                      padding-top: 3%
                      animation-delay: 3s
        .page 
          font-size: .2rem
          display: flex
          justify-content: center
          li
            border: 1px solid rgba(255, 255, 255, .4)
            margin-left: 1vw
            align-self: start
            text-align: center
            line-height: 2vh
            padding: 5px
            &:nth-child(3)
              background: #fff
              color: #333
              padding: 5px 10px
@media screen  and (max-width: 1200px)
   .line
     display: none !important
   .content_jour
     width: 90vw !important
     flex-direction: column
     .left
       width: 80vw !important
       display: flex
       flex-direction: column
       align-items: center
       margin: 0 auto
       .content_a
         width: 80vw !important
         margin: 0 0 !important
         margin-top: 5% !important
         padding: 2% 2% !important
         .info 
           width: 80vw !important
         .img
           width: 15vw !important
           margin: 0 !important
       .content_b
         width: 80vw !important
         margin: 0 0 !important
         margin-top: 0 !important
         margin-top: 1% !important
         padding: 2% 2% !important
         .info 
           width: 80vw !important
         .img2
           width: 15vw !important
           margin: 0 !important
     .right
       width: 80vw !important
       display: flex
       flex-direction: column
       align-items: center
       margin: 0 auto
       .content_c
         width: 80vw !important
         margin: 0 0 !important
         margin-top: 0 !important
         margin-top: 1% !important
         padding: 2% 2% !important
         .info 
           width: 80vw !important
         .img3
           width: 15vw !important
           margin: 0 !important
       .content_d
          width: 80vw !important
          margin: 0 0 !important
          margin-top: 0 !important
          margin-top: 1% !important
          padding: 2% 2% !important
          .info 
            width: 80vw !important
          .img4
            width: 15vw !important
            margin: 0 !important
   .page
     margin-top: 5% !important
</style>