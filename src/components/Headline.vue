<template>
  <div class="container">
    <h1>
      <span>OMDB API</span>
      <br>The Open Movie
    </h1>

    <p>
      The OMDB API is a RESTFul web service to obtain movie infromation<br>
      If you find this service useful, pleas consider making a one-time ~~~~
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
  padding-top: 40px;
}

h1 {
  line-height: 1;
  font-family: "East Sea Dokdo", sans-serif;
  font-size: 80px;

  span {
    color: $primary
  }
}

p {
  margin: 30px 0;
  color: $gray-600
}

</style>