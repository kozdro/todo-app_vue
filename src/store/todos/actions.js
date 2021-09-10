import { ADD, REMOVE } from './mutationTypes'
export default {
  actions: {
    add (context, todoToAdd) {
      const fullTodo = {
        id: Math.round(Math.random() * 10000000),
        msg: todoToAdd.msg
      }
      context.commit(ADD, { todoToAdd: fullTodo })
    },
    remove (context, todoId) {
      context.commit(REMOVE, { todoId })
    }
  }
}