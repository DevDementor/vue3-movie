<template>
  <div class="contrainer">
    <div class="inner">
      <MovieItem v-for="movie in moives" :key="movie.imdbID"/>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  name: "MovieList",
  components: {
    MovieItem
  },
  data() {
    return {
      movies: []
    }
  }
}
</script>

<style scoped>

</style>