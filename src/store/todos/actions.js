import { ADD, REMOVE } from './mutationTypes'

export default {
  actions: {
    add (context, todoToAdd) {
      const fullTodo = {
        id: Math.round(Math.random() * 10000000),
        msg: todoToAdd.msg,
        date: todoToAdd.date
      }
      context.commit(ADD, { todoToAdd: fullTodo })
    },
    remove (context, todoId) {
      context.commit(REMOVE, { todoId })
    },
    async getTodos (context) {
      const todos = []

      const response = await fetch('../../data/todos.json')
      const responseData = await response.json()

      todos.push(responseData)

      context.commit('getTodos', todos)
    }
  }
}
