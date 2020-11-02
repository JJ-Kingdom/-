<template lang="pug">
  .product
        .product-box-background
          .product-box
            .product-box-top
              router-link(to="/")  首页 
              span  >
              router-link(to="/product")  全部产品 
            h2.title PRODUCT CENTER
            h2.cnproduct 产品中心
            .product-body
              .product-body-tab-box
                .product-tab-item(v-for='(item,index) in ProductArr' :key="index" :class='index==tabindex?"active":""' @click="tabindex=index")
                  .tab-item-left
                    .item-left-box
                  .tab-item-right {{item.all}}
              .commodity-box
                transition(:name="tabname")
                  .commodity-box-items(v-show="tabflag" )
                    .commodity-box-item(v-for="(item,index) in ShowArr" :key="index"  :class='ItemClass')
                      .box-item-img
                        img(:src="item.image")
                      .box-item-title {{item.title}}
                      .box-item-cont {{item.cont}}
                      .box-item-more 
                        .text 查看更多
              el-pagination(background layout="prev, pager, next" :total="PaginationLength" :page-size='4' @current-change="total"  :current-page.sync="page")



  
</template>

<script>

export default {
  data() {
    return {
      ProductArr:[],
      tabindex:0,
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
      settime:null
    }
  },
  mounted() {
    this.$http.get("http://localhost:8080/product.json").then(data=>{
      this.ProductArr=data.data
      this.CommodityArr=data.data[this.tabindex].data
      this.PaginationLength=this.CommodityArr.length
      let num=(this.page-1)*4
      this.ShowArr=this.CommodityArr.slice(num,num+4)
      console.log(this.ShowArr)

    })
  },
  methods: {
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
      console.log(this.timer)
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
      this.ItemClass='enter'
     
      this.CommodityArr=this.ProductArr[news].data
      console.log(this.CommodityArr)
      this.PaginationLength=this.CommodityArr.length
      this.settime=setTimeout(()=>{
      this.ItemClass='out'
      },2500)
    }
  },
  thisindex(){
     this.tabname=" "
  }
}
</script>
<style lang="sass">
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
          filter: blur(5px) 
          background-image: url("~@/assets/ProductsImage/background.png")
          // background-color: rgba(255,255,255 , .1)
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
          .cnproduct
            text-align: center
            color: #c4b28a
            font-size: .3rem
          .product-body
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
                line-height: .4rem
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
            .product-body-tab-box
              margin:  auto
              width: 9.9rem
              height: .4rem
              margin-top: .2rem
              display: flex
              font-size: .25rem
              
              justify-content: space-between
              .product-tab-item
                display: flex
                flex: 1
                color: #979799
                font-weight: 500
                height: .5rem
                line-height: .5rem
                border-radius: .3rem
                position: relative
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
                margin-top: .54rem
                width: 100%
                height: 4.4rem
                
                .news-enter-active,.news-leave-active
                  transition: 0.5s  linear
                .news-leave-to,.news-enter
                  transform: translateX(-100%)
                .out-enter-active,.out-leave-active
                  transition: 0.5s  linear
                .out-enter,.out-leave-to
                  transform: translateX(100%)

                .commodity-box-items
                  display: flex
                  width: 100%
                  justify-content: space-around
                  .commodity-box-item
                    width: 3.14rem
                    height: 4.6rem
                    border-radius: .20rem
                    overflow: hidden
                    background: rgba(255,255 ,255 ,.1 )
                    &.enter
                      opacity: 0
                      &:nth-of-type(1)
                        transition: opacity .5s
                      &:nth-of-type(2)
                        transition: opacity 1s 
                        transition-delay: .5s
                      &:nth-of-type(3)
                        transition: opacity 1.5s
                        transition-delay:  1s
                      &:nth-of-type(4)
                        transition: opacity 2s
                        transition-delay: 1.5s
                    &.out
                      opacity: 1
                      &:nth-of-type(4)
                        transition: opacity  .5s
                      &:nth-of-type(3)
                        transition: opacity 1s 
                        transition-delay: .5s
                      &:nth-of-type(2)
                        transition: opacity 1.5s
                        transition-delay:  1s
                      &:nth-of-type(1)
                        transition: opacity 2s
                        transition-delay: 1.5s
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
                      
                     
                     
                      




          
     
          

</style>