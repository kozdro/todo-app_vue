<template>
  <div class="todo">
    <RouterLink :to="`/todo-view/${id}`">
      {{ message }}
    </RouterLink>
    <div class="wrap">
      due to: {{ date }}
      <button @click="remove">
        Remove
      </button>
    </div>
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
      type: String,
      required: true
    },
    date: {
      type: String,
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
    align-items: center;

    & button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      background-color: #6d250f;
      color: rgb(200, 200, 200);
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #a83512;
      }
    }

    & a {
      text-decoration: none;
      color: #56a07c;
      font-weight: bold;
    }
  }

  .wrap {
    font-size: 0.8em;
    color: rgb(180,180,180);

    & button {
      margin-left: 80px;
    }
  }
</style>
