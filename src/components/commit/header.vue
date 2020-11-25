<template lang='pug'>
.header-box
  .imgbox
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
@media screen and (max-width: 1200px)
  .header-box
      height: 1rem
      font-size: .12rem
@media screen and (min-width: 1200px)
  .header-wrap
    height: 1rem
.header-box
  z-index: 100
  width: 100%
  font-size: .14rem
  position: fixed
  top: 0
  left: 0
  display: flex
  justify-content: center
  background-color: #000
  background: rgba(0,0,0,.3)
  border-bottom: 1px solid #fff
  .imgbox
    display: flex
    align-items: center
    transform: translateX(-1rem)
    img
      width: 1.18rem
      height: auto
      display: block
      marin: auto
  ul
    display: flex
    transform: translateX(1rem)
    li
      position: relative
      text-align: center
      padding-top: .2rem
      margin-left: 20px
      a
        color: #fff
        flex: 1
        &.router-link-active
          color: #f1daa7
          .pitch
            position: absolute
            left: 50%
            bottom: 0
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
               
                  
</style>