<template lang="pug">
  .product
        .product-box-background
          .product-box
            .product-box-top
                router-link(to="/")  首页 
                span  >
                router-link(:to="'/product/'+$route.params.index")  全部产品 
                span(v-show='$route.params.index!=0')  >
                router-link(to="" v-show='$route.params.index!=0')  {{title}} 
            .box
                .left
                    .imgbox
                        img(:src='date.image' width='100%')  
                    .bgbox1
                    .bgbox2
                    .bgbox3
                .right
                    h1 煊赫纯棉大浴巾
                    p 全棉加厚/缩水率低/绿色环保/耐洗耐用
                    .content
                        h2 产品参数
                        .textbox
                            div(v-for="item in date.item") {{item}}
                    .btnbox 立即购买
               




  
</template>

<script>

export default {
    mounted() {
        console.log(this.$route.params.index)
        this.$http.get("http://localhost:8080/product.json").then(data=>{
            console.log(data.data)
        let arr=data.data[this.$route.params.index]
      this.title=arr.all
      for(let i in arr.data){

       if(arr.data[i].id==this.$route.params.id){
           this.date=arr.data[i]
           return
       }
      }

    })
    },
   data(){
        return{
            title:'',
    date:{
        "id":3,
        "image":"http://127.0.0.1/ProductsImage/3.png",
        "title":"加大加厚全棉强力吸水毛巾",
        "cont":"精致断档工艺，五星酒店标准，强力吸水，亲肤舒适",
        "advantage":"全棉加厚/缩水率低/绿色环保/耐洗耐用",
        "item":{
            "brand":"品牌: 煊赫",
            "quality":"材质: 100%纯棉",
            "color":"颜色分类: 蓝色 米白 咖啡",
            "specifications":"产品规格: 70*140CM",
            "standard":"执行标准: GB/T22864-2009",
            "security":"安全标准: GB18401-2010(B类)",
            "Level":"产品登记: 一等品(合格)",
            "model":"产品型号: DF14-OSF"
        }
    }
    
}
}
,
 
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
          font-size: 2rem
          .product-box-top
            height: .16rem
            margin-top: .35rem
            display: flex
            span
                font-size: .2rem
            a
                font-size: .2rem
                color: #fff
                cursor: pointer
            .router-link-exact-active
                color: #c2ae89
          .box
            width: 80%
            height: 100vh
            margin: auto
            padding: 1rem 0 0 .79rem 
            display: flex

            .left
                width: 5.9rem
                height: 5.9rem
                padding: .46rem .64rem 0 .68rem
                background: rgba(126,90,78,.5)
                border-radius: 30px
                box-shadow: 0px -7px 0px -3px rgba(68,57,61,.9) ,0px -12px 3px -6px rgba(50,47,54,.4), 0px -16px 7px -9px rgba(126,90,78,.5), 0px -16px 9px -12px rgba(126,90,78,.3) 
                display: flex
                align-items: center
                .imgbox
                    margin:  auto
                

            .right
                width: 4.63rem
                margin-left: .71rem
                margin-top: .84rem
                h1
                    font-size: .6rem
                    font-weight: 700
                    color: #f2dba7
                p
                    font-size: .2rem
                .content
                    margin-top: .3rem
                    h2
                        font-size: .4rem
                    .textbox
                        width: 120%
                        display: flex
                        flex-wrap: wrap
                        font-size: .16rem
                        margin-top: .1rem
                        line-height: .3rem
                        div
                            padding-right: .2rem
                .btnbox
                    margin-top: .8rem
                    width:1.65rem
                    height: .6rem
                    font-size: .3rem
                    background: #ef9978
                    border-radius: 50px
                    line-height: .6rem
                    text-align: center
                            
                     
                      




          
     
          

</style>