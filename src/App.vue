<template>
  <div class="container center-content">
    <the-header :text="textHeader" />
    <RouterView />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    textHeader () {
      return this.$route.path === '/todos' ? 'todos list' : 'todos'
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
