<template>
  <footer>
    <div class="about">kozdro 2021</div>
    <div class="socials">
      <a href="https://www.facebook.com/bkozdrowiecki/"
        ><i class="fab fa-facebook-square"></i>facebook</a
      >
      <a href="https://instagram.com/kozdro"
        ><i class="fab fa-instagram-square"></i>instagram</a
      >
      <a href="https://www.linkedin.com/in/b-kozdrowiecki/"
        ><i class="fab fa-linkedin"></i>linkedin</a
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 100px;
  border-top: 1px solid rgb(180, 180, 180);
  margin-top: auto;
}

.about {
  font-family: "Bebas Neue";
  font-size: 1.2em;
}

.socials {
  display: flex;
  flex-direction: column;
  margin-right: 150px;

  & a {
    text-decoration: none;
    color: #42b983;

    &:hover {
      color: #56a07c;
    }

    & i {
      margin-right: 5px;
    }
  }
}
</style>
