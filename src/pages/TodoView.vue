<template>
  <section class="todo-view">
    <div>TODO message:</div>
    <div>{{ currentTodo ? currentTodo.msg : "No such todo" }}</div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodoView',
  computed: {
    ...mapGetters('todos', ['getTodoById']),
    currentTodo () {
      return this.getTodoById(parseInt(this.$route.params.id))
    }
  }
}
</script>
<style scoped>
.todo-view{
  display: flex;
  flex-direction: column;
}
</style>
