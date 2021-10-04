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
      const response = await fetch('static/data/todos.json')
      const data = await response.json()
      const todos = data.map(todo => ({
        id: parseInt(todo.id),
        msg: todo.description,
        date: todo.dueTo.slice(0, 10)
      }))

      for (let i = 0; i < todos.length; i++) {
        context.commit(ADD, { todoToAdd: todos[i] })
      }
    }
  }
}
