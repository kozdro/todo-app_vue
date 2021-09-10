export default {
  getters: {
    getTodoById: state => idToFind => state.todos.find(todo => todo.id === idToFind),
    getSliceOfTodos: state => ([from, to]) => state.todos.slice(from, to)
  }
}
