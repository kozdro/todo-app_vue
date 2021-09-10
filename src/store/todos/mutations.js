import { ADD, REMOVE } from './mutationTypes'
export default {
  mutations: {
    [ADD] (state, { todoToAdd }) {
      state.todos = [...state.todos, todoToAdd]
    },
    [REMOVE] (state, { todoId }) {
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    }
  }
}
