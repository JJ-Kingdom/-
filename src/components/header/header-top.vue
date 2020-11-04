<template lang='pug'>
.header-box
    .imgbox
        .img
          img(src="../../assets/image/1.png")
        ul
          li(v-for="item in TitleList")
            router-link(:to="item.router")
              .title {{ item.title }}
              .alias {{ item.alias }}
              .pitch
</template>

<script>
export default {
  data() {
    return {
      TitleList: [
        {
          title: "首页",
          alias: "Home pages",
          router: "/home",
        },
        {
          title: "公司简介",
          alias: "Company Profile",
          router: "/compony",
        },
        {
          title: "产品中心",
          alias: "Product Center",
          router: "/product",
        },
        {
          title: "新闻资讯",
          alias: "Product Center",
          router: "/journalism",
        },
        {
          title: "联系我们",
          alias: "Contact us",
          router: "/user",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.header-box
  z-index: 100
  width: 100vw
  position: fixed
  top: 0
  left: 0
  display: flex
  background-color: #000
  background: rgba(0,0,0,.1)
  height: 1rem
  .imgbox
    padding: 0
    width: 14rem
    height: auto
    display: flex
    justify-content: space-around
    margin: 0 auto
    .img
      width: 1.8rem
      height: 100%
      img
        width: 100%
        height: 100%
  ul
    width: 12rem
    display: flex
    li
      position: relative
      flex: 1
      height: 1.2rem
      font-size: .16rem
      text-align: center
      padding: .28rem
      width: 4rem
      a
        color: #fff
        display: flex
        flex-direction: column
        justify-content: space-around
        &.router-link-active
          color: #f1daa7
          .pitch
            position: absolute
            left: 50%
            bottom: .23rem
            transform: translateX(-50%)
            width: .59rem
            margin: auto
            height: .2rem
            background-image: url('../../assets/image/sanjiao.png')
            background-repeat: no-repeat
            background-position: bottom center
            border-bottom: 2px solid #f7dfab 
          &.router-link-active 
            .pitch
              opacity: 1
        .alias
            width: 2rem
            margin-top: .1rem
                  
</style>