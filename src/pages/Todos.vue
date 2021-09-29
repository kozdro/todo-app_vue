<template>
  <section class="todos">
    <the-header text="todos list" />
    <div class="todos__managament">
      <div class="todos-length">Things to do: {{ currentTodos.length }}</div>
      <div class="todos__managament-add">
        <input
          v-model="newTodoMessage"
          placeholder="Todo content"
          @blur="v$.newTodoMessage.$touch()"
        >
        <button @click="createTodo">Add todo</button>
      </div>
      <div v-if="v$.newTodoMessage.$error" class="todos__managament-errors">
        <div v-for="error in v$.newTodoMessage.$errors" :key="error.$message">
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
          $validator: (value) => value.length > 3,
          $message: ({ $params }) =>
            `This field should be at least ${$params.min} long.`,
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
  width: 800px;
}

.todos__managament {
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-add {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    & input {
      width: 60%;
      padding: 10px 15px;
    }

    & button {
      padding: 10px 30px;
      border: none;
      background-color: #56a07c;
      cursor: pointer;
      font-size: 1.2em;
      transition: 0.3s;

      &:hover {
        background-color: #42b983;
      }
    }
  }
}

.todos-length {
  font-size: 0.8em;
  margin-bottom: 10px;
  align-self: flex-start;
}

.todos__browser-entry {
  margin: 0.5em;
}

.todos__managament-errors {
  color: red;
}
</style>
