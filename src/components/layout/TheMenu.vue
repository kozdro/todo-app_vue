<template>
  <nav>
    <ul>
      <li v-if="homePage">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-if="todosPage">
        <router-link to="/todos">
          List
        </router-link>
      </li>
      <li v-if="aboutPage">
        <router-link to="/about">
          About Project
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    homePage () {
      return this.$route.path !== '/'
    },
    todosPage () {
      return this.$route.path !== '/todos'
    },
    aboutPage () {
      return this.$route.path !== '/about'
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid rgb(180, 180, 180);
  border-top: 1px solid rgb(180, 180, 180);
  margin-bottom: 20px;
}

ul {
  list-style: none;
  display: flex;
  width: 40%;
  justify-content: space-evenly;
}

li {
  background-color: #42b983;
  border: 3px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 3px solid #56a07c;
  }
}

a {
  padding: 5px 20px;
  text-decoration: none;
  color: black;
  display: block;
  width: inherit;
}
</style>
