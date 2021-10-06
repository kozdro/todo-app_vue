<template>
  <div>
    <h1>{{ text }}</h1>
    <img
      src="static/img/notebook.png"
      alt="logo"
    >
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

h1 {
  font-family: 'Bebas Neue';
  font-size: 60px;
  color: #56a07c;
  text-align: center;
}

img {
  height: 80px;
}
</style>
