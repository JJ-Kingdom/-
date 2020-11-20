<template lang="pug">
  .product
        .product-box-background
          .product-box
            p(style='font-size:.2rem;position:fixed;right:5%;top:5%;')
              span(@click="cn")  cn
              span /
              span(@click="en") en
            .product-box-top
              router-link(to="/")  {{$t('Product.index')}} 
              span  >
              router-link(to="/product/0")  {{$t('Product.all')}} 
            h2.title PRODUCT CENTER
            h2.cnproduct {{$t('Product.cnproduct')}} 
            .product-body
              .product-body-tab-box
                .product-tab-item(v-for='(item,indexs) in ProductArr' :key="indexs" :class='indexs==tabindex?"active":""' @click="tabindex=indexs")
                  .tab-item-left
                    .item-left-box
                  .tab-item-right {{item.all}}
              .commodity-box
                transition(:name="tabname")
                  .commodity-box-items(v-show="tabflag" )
                    .commodity-box-item(v-for="(item,index) in ShowArr" :key="index"  :class='ItemClass' )
                      .box-item-max(@click="$router.push({name:'ProductsItem',params:{'index':tabindex,'id':item.id}})")
                        .box-item-img
                          img(:src="item.image")
                        .box-item-title {{item.title}}
                        .box-item-cont {{item.cont}}
                        .box-item-more 
                          .text {{$t('Product.text')}} 
             
              el-pagination(background layout="prev, pager, next" :disabled="disabled" :total="PaginationLength" :page-size='4' @current-change="total"  :current-page.sync="page" :prev-text="$t('Product.up')" :next-text="$t('Product.drow')" :layout="'prev, pager, next,slot'" )
                slot
                  .index(@click="page=1") {{$t('Product.index')}} 
                  .unindex(@click="page=PaginationLength/4") {{$t('Product.unindex')}} 

               




  
</template>

<script>
import  i18n from '@/i18n/index.js'

export default {
  data() {
    return {
      ProductArr:[],
      tabindex:'',
      CommodityArr:[],
      PaginationLength:0,
      ShowArr:[],
      page:1,
      tabname:'',
      tabflag:true,
      outname:'',
      thisindex:0,
      timer:null,
      ItemClass:'',
      ItemFlage:true,
      settime:null,
      disabled:false
    }
  },
  created() {
   
       this.$http.get("http://localhost:8080/product.json").then(data=>{
         if(this.$route.params.index){
      console.log(this.$route.params.index)
      this.tabindex=this.$route.params.index
    }
      this.ProductArr=data.data
      this.CommodityArr=data.data[this.tabindex].data
      console.log(this.CommodityArr)
      this.PaginationLength=this.CommodityArr.length
      let num=(this.page-1)*4
      this.ShowArr=this.CommodityArr.slice(num,num+4)
      console.log(this.ShowArr)
       

    })
  },
  mounted() {
    
 
  },
  methods: {
    cn(){
i18n.locale='ch'
    },
    en(){
   i18n.locale='eh'

    },
   total(e){
     console.log(this.page,e)
      let num=(this.page-1)*4
      this.ShowArr=this.CommodityArr.slice(num,num+4)
      console.log(this.ShowArr)
   },
   timefn(news,out){
      if(news>out){
        console.log(news,out)
        this.tabname="news"
        this.tabflag=false
       
        this.timer=setTimeout(()=>{
          this.tabname='out'
          this.tabflag=true
          this.thisindex++

        },600)
      }else{
        this.tabname='out'
          this.tabflag=false
          this.timer=setTimeout(()=>{
          this.tabname='news'
          this.tabflag=true
          this.thisindex++

        },600)
      }
   }
  },
  watch: {
    page(news,out){
      if(this.settime!=null){
       return false
        // this.ItemClass=" "
      }
      console.log(this.timer)
        this.ItemClass=" "

      clearTimeout(this.settime)
       if(this.timer){
         clearTimeout(this.timer)
         this.tabname=" "
         this.tabflag=true
          this.timer=null
          setTimeout(()=>{
          this.timefn(news,out)

          },200)
         return false
        }
        this.timefn(news,out)

     
     
    },
    tabindex(news){
     let newsr=news||this.$route.params.index
      console.log(newsr)
      this.tabname=" "
      this.page=1
      this.ItemClass='enter'
     this.disabled=true
      this.CommodityArr=this.ProductArr[newsr].data
      console.log(this.CommodityArr)
      this.PaginationLength=this.CommodityArr.length
      clearTimeout(this.settime)
      this.settime=setTimeout(()=>{
      this.ItemClass='out'
      this.settime=null
     this.disabled=false

      },1000)
    }
  },
  thisindex(){
     this.tabname=" "
  }
}
</script>
<style lang="sass" >
  .product
    width: 100vw
    height: 100vh
    // background-color: blue
    position: absolute
    z-index: 0
    background-image: url("~@/assets/ProductsImage/background.png")
    background-size: cover
    top: 0
    overflow: hidden
    color: #fff
    &::before
      width: 100%
      height: 100%
      content: ""
      background: rgba(0, 0, 0, .6)
      position: absolute
      top: 0
      left: 0
    .product-box-background
      width: 80%
      height: 100%
      position: absolute
      left: 50%
      transform: translateX(-50%)
      z-index: 2
      &::before
          position: absolute
          content: ''
          top: 0
          left: 0
          width: 99%
          height: 100%
          transform: translateX(.5%)
          z-index: -2
          filter: blur(2px) 
          // background-color: rgba(255,255,255 , .1)
          background: url("~@/assets/ProductsImage/background.png")
          background-size: cover
          // box-shadow: 0 0 .1rem #000
      .product-box
          width: 100%
          height: 100%
          background: rgba(0,0,0 , .05)
          position: absolute
          top: 0
          left: 0
          padding: .6rem .6rem .6rem .6rem
          .product-box-top
            height: .16rem
            margin-top: .35rem
            display: flex
            span
              font-size: .14rem
            a
              font-size: .14rem
              color: #fff
              cursor: pointer
            .router-link-exact-active
              color: #c2ae89
          .title
            text-align: center
            font-size: .5rem
            margin-top: .2rem
            animation: product-title  .5s
          .cnproduct
            text-align: center
            color: #c4b28a
            font-size: .3rem
            animation: product-title  .8s
          .product-body
            margin: 0 auto
            .el-pagination
              position: fixed
              left: 50%
              transform: translateX(-50%)
              margin-top: .4rem
              color: #fff
              height: .4rem
              font-size: .3rem
              button
                background: transparent
                border: solid 1px #fff
                height: .4rem
                font-size: .2rem
                line-height: .4rem
                span
                  height: .4rem
                  font-size: .2rem
                  line-height: .4rem
                  display: block
                  color: #fff
              li
                height: .4rem
                background: transparent
                border: solid 1px #fff
                font-size: .2rem
                line-height: .4rem
                &.active
                  background: #fff
                  color: #000
                &:hover
                  color: #606266
              slot
                .index
                  position: absolute
                  left: -.87rem
                  width: .85rem
                  top: 8%
                  height: .4rem
                  font-size: .2rem
                  line-height: .4rem
                  text-align: center
                  border: solid 1px #fff
                .unindex
                  width: .85rem
                  position: absolute
                  text-align: center
                  right: -.87rem
                  top: 8%
                  height: .4rem
                  font-size: .2rem
                  line-height: .4rem
                  border: solid 1px #fff
            .product-body-tab-box
              margin:  auto
              width: 9.9rem
              height: .5rem
              margin-top: .2rem
              display: flex
              font-size: .25rem
              overflow: hidden
              justify-content: space-around
              .product-tab-item
                display: flex
                flex: 1
                color: #979799
                font-weight: 500
                height: .5rem
                width: 1.5rem
                line-height: .5rem
                border-radius: .3rem
                position: relative
                transform: translateY(100%)
                &:hover
                  background: rgba(49,49 ,49 ,.2 )
                &:nth-of-type(1)
                  animation: product-tab-item  .2s    forwards
                &:nth-of-type(2)
                  animation: product-tab-item  .2s  .2s forwards
                &:nth-of-type(3)
                  animation: product-tab-item  .2s  .4s forwards
                &:nth-of-type(4)
                  animation: product-tab-item  .2s  .8s forwards
                &:nth-of-type(5)
                  animation: product-tab-item  .2s  1s forwards
                .tab-item-left
                  width: .35rem
                  height: .35rem
                  background: rgba(0, 0, 0,.2 )
                  box-sizing: border-box
                  border: .05rem solid transparent
                  border-radius: 50%
                  position: absolute
                  top: 50%
                  left: .17rem
                  transform: translateY(-50%)
                  display: flex
                  align-items: center
                  .item-left-box
                    margin: 0 auto
                    width: 50%
                    height: 50%
                    background: rgba(255,255 ,255 ,.2 )
                    border-radius: 50%
                    top: 50%
                    left: 50%
                    // transform: translate(-50%,-50%)
                &.active
                  color: #e5c998
                  background: rgba(49,49 ,49 ,.4 )
                  .tab-item-left
                    border: .05rem solid rgba(228,200 ,152 ,.6 )
                    .item-left-box
                      background: #e5c998
                .tab-item-right
                  box-sizing: border-box
                  padding-left: .55rem
            .commodity-box
                font-size: .16rem
                display: flex
                margin-top: .14rem
                width: 100%
                height: 4.4rem
                .news-enter-active,.news-leave-active
                  transition: 0.2s  linear
                .news-leave-to,.news-enter
                  transform: translateX(-100%)
                .out-enter-active,.out-leave-active
                  transition: 0.2s  linear
                .out-enter,.out-leave-to
                  transform: translateX(100%)
                .commodity-box-items
                  display: flex
                  width: 100%
                  justify-content: space-around
                  .commodity-box-item
                    width: 3.14rem
                    height: 4.6rem
                    cursor: pointer
                    &.enter
                      opacity: 0
                      &:nth-of-type(1)
                        transition: opacity .2s
                      &:nth-of-type(2)
                        transition: opacity .2s 
                        transition-delay: .2s
                      &:nth-of-type(3)
                        transition: opacity .2s
                        transition-delay:  .4s
                      &:nth-of-type(4)
                        transition: opacity .2s
                        transition-delay:   .6s
                    &.out
                      opacity: 1
                      &:nth-of-type(4)
                        transition: opacity  .2s
                      &:nth-of-type(3)
                        transition: opacity .2s 
                        transition-delay: .2s
                      &:nth-of-type(2)
                        transition: opacity .2s
                        transition-delay:  .4s
                      &:nth-of-type(1)
                        transition: opacity .2s
                        transition-delay: .6s
                    .box-item-max
                      width: 100%
                      height: 100%
                      border-radius: .20rem
                      overflow: hidden
                      background: rgba(255,255 ,255 ,.1 )
                      transform: scale(.9)
                      &:hover
                        transform: scale(1)
                        transition: .3s linear
                    .box-item-title
                      font-weight: 700
                      color: #dec395
                      height: .66rem
                      line-height: .66rem
                      margin-left: .3rem
                      font-size: 14px
                      white-space: nowrap
                      overflow: hidden
                      text-overflow: ellipsis
                    .box-item-cont
                      font-size: .16rem
                      margin-left: .3rem
                      word-break: break-all
                      text-overflow: ellipsis
                      overflow: hidden
                      display: -webkit-box
                      -webkit-line-clamp: 2
                      -webkit-box-orient: vertical
                      height: .72rem
                    .box-item-more
                      width: 90%
                      padding-left: 10%
                      .text
                        text-align: right
                    .box-item-img
                      width: 100%
                      height: 2.86rem
                      text-align: center
                      img
                        width: 80%
                        height: 80%
                        margin-top: 10%
                    &:nth-of-type(1)
                      .box-item-img
                        background: rgba(136,89 ,74 ,.5 )
                    &:nth-of-type(2)
                      .box-item-img
                        background: rgba(16,91 ,131 ,.5 )
                    &:nth-of-type(3)
                      .box-item-img
                        background: rgba(79,73 ,119 ,.5 )
                    &:nth-of-type(4)
                      .box-item-img
                        background: rgba(67,114 ,108 ,.5 )
@keyframes product-title 
    0%
      transform: translateX(-100%)
    100%
      transform: translateX(0%)
@keyframes product-tab-item 
    0%
      transform: translateY(100%)

    100%
      transform: translateY(0%)
@media screen and (max-width: 800px)
  .commodity-box
    height: 8.8rem !important
    .commodity-box-items
      flex-wrap: wrap
      text-align: center
      height: 100%
      .commodity-box-item
        width: 50% !important
        .box-item-img
          img
            height: 60% !important
            width: 60% !important
        .box-item-cont
          font-size: .25rem !important
  .el-pagination
    li
      height: .6rem !important
      line-height: .6rem !important
    button
      height: .6rem !important
      line-height: .6rem !important
    slot
      div
        height: .6rem !important
        line-height: .6rem !important
        top: 17% !important
</style>