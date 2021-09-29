<template>
  <div class="container center-content">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
