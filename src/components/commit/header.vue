<template lang='pug'>
.header-box
  el-row(:gutter="10")
    el-col(:xs="4", :sm="4", :md="4", :lg="4", :xl="2")
      .grid-content.bg-purple
      .imgbox
        img(src="../../assets/image/1.png")
    el-col(:xs="8" :sm="8" :md="8" :lg="8" :xl="10")
      .grid-content.bg-purple-light
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
  display: flex
  background-color: #000
  background: rgba(0,0,0,.1)
  height: 1rem
  border-bottom: 1px solid #fff
  .imgbox
    padding: 0
    width: 1.18rem
    height: auto
    margin-left: 1rem
    img
      height: 100%
  ul
    width: 10rem
    margin-left: 3rem
    display: flex
    li
      position: relative
      flex: 1
      height: 1rem
      font-size: .16rem
      text-align: center
      padding: .28rem
      a
        color: #fff
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