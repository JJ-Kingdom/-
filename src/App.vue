<template lang="pug">
  .app
    .nav
      router-link(to="/") Home|
      router-link(to="/compony") Compony|
      router-link(to="/product") Product|
      router-link(to="/journalism") Journalism|
      router-link(to="/user") User
    router-view
</template>

<style lang="sass">
    .nav
      position: relative
      z-index: 999
      font-size: .16rem
</style>
