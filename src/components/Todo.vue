<template>
  <div class="todo">
    <RouterLink :to="`/todo-view/${id}`">
      {{ message }}
    </RouterLink>
    <button @click="remove">
      Remove
    </button>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: {
    message: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    remove () {
      this.$emit('remove', this.id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .todo {
    border: solid black 1px;
    padding: 1em;
    display: flex;
    justify-content: space-between;
  }
</style>
