<template>
  <footer>
    <div class="about">
      <i class="fas fa-hand-point-right" /><router-link to="/about">
        kozdro 2021
      </router-link>
    </div>
    <div class="socials">
      <a
        href="https://www.facebook.com/bkozdrowiecki/"
        target="_blank"
      ><i class="fab fa-facebook-square" />facebook</a>
      <a
        href="https://instagram.com/kozdro"
        target="_blank"
      ><i class="fab fa-instagram-square" />instagram</a>
      <a
        href="https://www.linkedin.com/in/b-kozdrowiecki/"
        target="_blank"
      ><i class="fab fa-linkedin" />linkedin</a>
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
  & i {
    margin-right: 10px;
    font-size: 1.5em;
    color: #56a07c;
  }

  & a {
    text-decoration: none;
    font-family: "Bebas Neue";
    font-size: 1.2em;
    color: black;
    border-bottom: 2px solid white;
    transition: 0.3s;

    &:hover {
      border-bottom: 2px solid #42b983;
    }
  }
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
