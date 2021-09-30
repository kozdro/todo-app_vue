<template>
  <section class="todo-view">
    <div class="todo-view__question">
      What <span>todo</span>?
    </div>
    <div class="todo-view__answer">
      {{ currentTodo ? currentTodo.msg : "No such todo" }}
    </div>
    <div class="todo-view__due-date">
      Due date: {{ currentTodo.date }}
    </div>
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

<style lang="scss" scoped>
.todo-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  &__question {
    font-size: 1.5em;
    margin-bottom: 20px;

    & span {
      font-family: 'Bebas Neue';
      color: #56a07c;
    }
  }

  &__answer {
    color: #42b983;
    font-size: 1.2em;
  }

  &__due-date {
    font-size: 0.8em;
    color: rgb(180,180,180);
  }
}
</style>
