<template lang="pug">
  .app
    .nav
      <!-- router-link(to="/") Home|
      router-link(to="/compony") Compony|
      router-link(to="/product") Product|
      router-link(to="/journalism") Journalism|
      router-link(to="/user") User -->
    router-view
</template>

<style lang="sass">
.app
	position: relative
	.nav
		position: fixed
</style>
