<template>
  <div class="container center-content">
    <the-header :text="textHeader" />
    <the-menu />
    <RouterView />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@layout/TheHeader.vue'
import TheFooter from '@layout/TheFooter.vue'
import TheMenu from '@layout/TheMenu.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheMenu
  },
  computed: {
    textHeader () {
      if (this.$route.path === '/todos') return 'todos list'
      if (this.$route.path === '/about') return 'about todos'
      return 'todos'
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#app {
  width: 100%;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
}
</style>
