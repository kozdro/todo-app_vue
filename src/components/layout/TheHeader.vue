<template>
  <h1>{{ text }}</h1>
  <!-- <div class="logo" /> -->
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
h1 {
  font-family: 'Bebas Neue';
  font-size: 60px;
  color: #56a07c;
  text-align: center;
  padding-top: 60px;
}

// .logo {
//   background-image: url('../../assets/img/notebook.png');
// }
</style>
