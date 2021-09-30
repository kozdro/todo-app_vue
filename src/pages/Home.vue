<template>
    <div class="hello">
      <p class="description">
        <span>todos</span> is an app that will help you organize your things to
        do!
      </p>
      <h3>
        To add new <span>todo</span> or check your list, go
        <router-link to="/todos">here</router-link>.
      </h3>
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
<style lang="scss" scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description {
  margin-bottom: 50px;

  & span {
    font-family: "Bebas Neue";
    font-size: 1.5em;
  }
}

h3 {
  font-weight: normal;
  font-size: 1.5em;

  & span {
    font-family: "Bebas Neue";
  }
}

a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  font-family: "Bebas Neue";
  letter-spacing: 1px;
  border-bottom: 3px solid white;
  transition: 0.3s;

  &:hover {
    border-bottom: 3px solid #56a07c;
  }
}
</style>
