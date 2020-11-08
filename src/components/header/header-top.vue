<template lang="pug">
  header.header-wrap
    .wrap
      .logo-wrap
        .logo
      ul.nav-group
        router-link.nav( :to="v.path" tag="li" active-class="active" v-for="(v, i) in navs" :key="i" )
          .ch-title {{ v.chTitle }}
          .en-title {{ v.enTitle }}
      el-button-group.language-group
        el-button( :class="['language', { active: locale === v }]" size="mini" @click="$i18n.locale = v" v-for="v in language" :key="v"  ) {{ v }}
      .xs-menu-switch( @click="xsMenuVisible = !xsMenuVisible" )
        i.el-icon-menu
    transition( name="xs-menu" )
      ul.xs-menu( v-show="xsMenuVisible" )
        router-link.menu( :to="v.path" tag="li" active-class="active" v-for="(v, i) in navs" :key="i" )
          .ch-title {{ v.chTitle }}
          .en-title {{ v.enTitle }}
        el-button-group.language-group
          el-button( :class="['language', { active: locale === v }]" size="mini" @click="$i18n.locale = v" v-for="v in language" :key="v"  ) {{ v }}
</template>

<script>
  export default {
    data () {
      return {
        language: [],
        navs: [
          {
            path: '/home',
            chTitle: '首页',
            enTitle: 'Home page',
          },
          {
            path: '/compony',
            chTitle: '公司简介',
            enTitle: 'Company Profile',
          },
          {
            path: '/product',
            chTitle: '产品中心',
            enTitle: 'Product Center',
          },
          {
            path: '/journalism',
            chTitle: '新闻资讯',
            enTitle: 'Product Center',
          },
          {
            path: '/user',
            chTitle: '联系我们',
            enTitle: 'Contact us',
          }
        ],
        xsMenuVisible: false
      }
    },
    computed: {
      locale () {
        console.log(this.$i18n.locale)
        return this.$i18n.locale
      }
    },
    created () {
      this.language = Object.keys(this.$i18n.messages)
      console.log(this.$i18n)
    }
  }
</script>

<style lang="sass">
  .header-wrap
    position: relative
    z-index: 100
    height: 70px
    border-bottom: 1px solid rgba(255, 255, 255, 0.2)
    background-color: rgba(0, 0, 0, 0.9)
    margin: 0 auto
    color: white
    .language-group
      height: 100%
      display: flex
      align-items: center
      margin-left: auto
      padding: 8px 20px
      margin-left: 90px
      button
        padding: 3px 9px
        background: none
        border: 1px solid rgba(255, 255, 255, 0.2)
        &.active
          color: #f7dfab
    .wrap
      display: flex
      align-items: flex-end
      width: 100%
      height: 100%
      
      .logo-wrap
        flex-shrink: 0
        width: 105px
        height: 57px
        .logo
          width: 100%
          height: 100%
          background: url('~@/assets/image/logo.png') 00/100% 100%
      .nav-group
        display: flex
        align-items: flex-end
        margin-left: 1.1rem
        .nav
          position: relative
          margin-right: 60px
          padding-bottom: 0.09rem
          text-align: center
          &.active
            &:before
              border-bottom-color: #f7dfab
            &:after
              background-color: #f7dfab
            .ch-title,
            .en-title
              color: #f7dfab
          &:last-child
            margin-right: 0 !important
          .ch-title
            white-space: nowrap
            font-size: 17px
            color: rgba(255, 255, 255, 0.4)
          .en-title
            white-space: nowrap
            font-size: 12px
            color: rgba(255, 255, 255, 0.15)
          &:before
            content: ''
            display: block
            position: absolute
            left: 0
            right: 0
            bottom: 0
            width: 0
            height: 0
            margin: auto
            border-left: 0.045rem solid transparent
            border-right: 0.045rem solid transparent
            border-bottom: 0.05rem solid transparent
          &:after
            content: ''
            display: block
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: 1px
            margin: 0 5px
            background-color: transparent
      .xs-menu-switch
        display: none
        justify-content: center
        align-items: center
        position: absolute
        top: 0
        right: 0
        width: 50px
        height: 50px
        padding: 10px
        color: rgba(255, 255, 255, 0.7)
    .xs-menu
      overflow: hidden
      .menu
        padding: 8px 20px
        &.active
          background-color: rgba(255, 255, 255, 0.1)
          .ch-title,
          .en-title
            color: #f7dfab
        .ch-title
          font-size: 13px
          color: rgba(255, 255, 255, 0.7)
        .en-title
          font-size: 12px
          color: rgba(255, 255, 255, 0.4)
      &-enter, &-leave-to
        height: 0
      &-enter-active, &-leave-active
        transition: height 300ms
      &-enter-to, &-leave
        height: 245px

  @media screen and (max-width: 768px)
    .header-wrap
      height: auto
      min-height: 50px !important
      .wrap
        .logo-wrap
          width: 65px
          height: 45px
          margin-left: 16px
        .nav-group
          display: none
        .language-group
          display: none
        .xs-menu-switch
          display: flex
          right: 0
  @media screen and (min-width: 769px) and (max-width: 992px)
    .header-wrap
      height: 50px
      .wrap
        .logo-wrap
          width: 65px
          height: 45px
          margin-left: 69px
        .nav-group
          margin-left: 30px
          .nav
            margin-right: 30px
            .ch-title
              font-size: 12px !important
            .en-title
              transform: scale(0.7)
      .xs-menu
        display: none
  @media screen and (min-width: 992px) and (max-width: 1200px)
    .header-wrap
      height: 50px
      .wrap
        .logo-wrap
          width: 65px
          height: 45px
          margin-left: 138px
        .nav-group
          .nav
            margin-right: 40px
            .ch-title
              font-size: 12px !important
            .en-title
              transform: scale(0.7)
      .xs-menu
        display: none
  @media screen and (min-width: 1200px)
    .header-wrap
      height: 50px
      .wrap
        .logo-wrap
          width: 105px
          height: 50px
          margin-left: 128px
        .nav-group
          margin-left: 60px
          height: 50px
          line-height: 15px
          .nav
            margin-right: 66px
      .xs-menu
        display: none
</style>
