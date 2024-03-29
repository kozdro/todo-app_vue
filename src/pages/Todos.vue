<template>
  <section class="todos">
    <div class="todos__managament">
      <div class="todos-length">
        Things to do: {{ currentTodos.length }}
      </div>
      <div class="todos__managament-add">
        <input
          v-model="newTodoMessage"
          placeholder="Todo content"
          @blur="v$.newTodoMessage.$touch()"
        >
        <input
          v-model="dueDate"
          type="date"
          :class="vClass(v$.dateObj)"
          @input="v$.dateObj.$touch()"
        >
        <button @click="createTodo">
          Add todo
        </button>
      </div>
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
        :date="todo.date"
        @remove="onRemoveTodo"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, minValue } from '@vuelidate/validators'
import Todo from '../components/Todo.vue'

export default {
  name: 'Todos',
  components: {
    Todo
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
            `Todo content should be at least ${$params.min} long.`,
          $params: { min: 3 }
        }
      },
      dateObj: {
        required,
        minValue: minValue(new Date())
      }
    }
  },
  data () {
    return {
      newTodoMessage: '',
      page: 0,
      dueDate: null
    }
  },
  computed: {
    ...mapGetters('todos', ['getSliceOfTodos']),
    currentTodos () {
      return this.getSliceOfTodos([0, 15])
    },
    dateObj () {
      return this.dueDate ? new Date(this.dueDate) : null
    }
  },
  methods: {
    ...mapActions('todos', {
      addTodo: 'add',
      removeTodo: 'remove'
    }),
    createTodo () {
      if (this.v$.newTodoMessage.$error || this.v$.dateObj.$error) return

      const newTodo = {
        id: Math.round(Math.random() * 10000000),
        msg: this.newTodoMessage,
        date: this.dueDate
      }
      this.addTodo(newTodo)
    },
    onRemoveTodo (id) {
      this.removeTodo(id)
    },
    vClass (v$) {
      return {
        error: v$.$error,
        valid: !v$.$invalid
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.todos {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 60%;
  margin-bottom: 50px;
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
      width: 30%;
      padding: 10px 15px;
    }

    & button {
      padding: 10px 30px;
      border: none;
      border-radius: 5px;
      background-color: #56a07c;
      cursor: pointer;
      font-size: 1.2em;
      transition: 0.3s;

      &:hover {
        background-color: #42b983;
      }
    }
  }

  &-errors {
    color: red;
  }
}

.todos-length {
  font-size: 0.8em;
  margin-bottom: 10px;
  align-self: flex-start;
}

.todos__browser {
  display: flex;
  flex-direction: column-reverse;

  &-entry {
    margin: 0.5em;
  }
}

.error {
  border-color: red;
  background: #FDD;

  &:focus {
    outline-color: #F99;
  }
}

.valid {
  border-color: #5A5;
  background: #EFE;

  &:focus {
    outline-color: #8E8;
  }
}
</style>
