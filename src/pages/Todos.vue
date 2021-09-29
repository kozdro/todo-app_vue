<template>
  <section class="todos">
    <the-header text="todos list"></the-header>
    <div class="todos__managament">
      <div>{{ currentTodos.length }}</div>
      <input
        v-model="newTodoMessage"
        placeholder="Todo content"
        @blur="v$.newTodoMessage.$touch()"
      >
      <button @click="createTodo">
        Add todo
      </button>
      <div
        v-if="v$.newTodoMessage.$error"
        class="todos__managament-errors"
      >
        <div
          v-for="error in v$.newTodoMessage.$errors"
          :key="error.$message"
        >
          {{ error.$message }}
        </div>
      </div>
    </div>
    <div class="todos__browser">
      <Todo
        v-for="todo in currentTodos"
        :id="todo.id"
        :key="todo.id"
        class="todos__browser-entry"
        :message="todo.msg"
        @remove="onRemoveTodo"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Todo from '../components/Todo.vue'
import TheHeader from '../components/layout/TheHeader.vue'

export default {
  name: 'Todos',
  components: {
    Todo,
    TheHeader
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  validations () {
    return {
      newTodoMessage: {
        required,
        minLength: {
          $validator: value => value.length > 3,
          $message: ({ $params }) => `This field should be at least ${$params.min} long.`,
          $params: { min: 3 }
        }
      }
    }
  },
  data () {
    return {
      newTodoMessage: '',
      page: 0
    }
  },
  computed: {
    ...mapGetters('todos', ['getSliceOfTodos']),
    currentTodos () {
      return this.getSliceOfTodos([0, 10])
    }
  },
  methods: {
    ...mapActions('todos', {
      addTodo: 'add',
      removeTodo: 'remove'
    }),
    createTodo () {
      if (this.v$.newTodoMessage.$error) return
      this.addTodo({
        msg: this.newTodoMessage
      })
    },
    onRemoveTodo (id) {
      this.removeTodo(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.todos {
  padding: 1.5em;
  display: flex;
  flex-direction: column;
}

.todos__managament {
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.todos__browser-entry {
  margin: 0.5em;
}

.todos__managament-errors {
  color: red;
}
</style>
