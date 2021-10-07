import { ADD, REMOVE } from './mutationTypes'
import axios from 'axios'

export default {
  actions: {
    async add (context, todoToAdd) {
      const fullTodo = {
        id: todoToAdd.id,
        msg: todoToAdd.msg,
        date: todoToAdd.date
      }
      context.commit(ADD, { todoToAdd: fullTodo })

      const response = await axios.post('/api/add', fullTodo)
      context.commit(ADD, response)
    },
    async remove (context, todoId) {
      context.commit(REMOVE, { todoId })

      const response = await axios.delete(`/api/delete/${todoId}`)
      context.commit(REMOVE, response)
    },
    async getTodos (context) {
      const res = await fetch('static/data/todos.json')
      const data = await res.json()
      const todos = data.map(todo => ({
        id: parseInt(todo.id),
        msg: todo.description,
        date: todo.dueTo.slice(0, 10)
      }))

      for (let i = 0; i < todos.length; i++) {
        context.commit(ADD, { todoToAdd: todos[i] })
      }

      // const response = await axios.get('/api/get', todos)
      // context.commit(ADD, response)
    }
  }
}
