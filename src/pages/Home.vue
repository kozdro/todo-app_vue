<template>
  <div class="hello">
    <h1>VueJs TODO List App</h1>
    <ul>
      <li>
        <router-link to="/todos">
          todos
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  mounted () {
    this.addTodo({ id: 'testId', msg: 'testMsg' })
  },
  methods: {
    ...mapActions('todos', {
      addTodo: 'add'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
