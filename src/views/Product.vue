<template lang="pug">
  .product-box

</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.$http.get("http://localhost:8080/product.json").then(data=>{
      console.log(data)
    })
  },
}
</script>