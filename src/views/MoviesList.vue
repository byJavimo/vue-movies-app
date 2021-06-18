<template>
  <div class="movies-list">
    <div v-if="error">
        {{error.message}}
    </div>
    <Spinner v-if="loading" />
    <div v-if="!loading && !error">
        <ul>
            <MovieCard  v-for="movie in movies" :key="movie.id" :data="movie" />
        </ul>
    </div>
  </div>
</template>

<script>
// Components
import Spinner  from '../components/Spinner.vue';
import MovieCard from '../components/MovieCard.vue';
// Services
import {getMovies} from '../services/movies.api.js';

export default {
  name: 'MoviesList',
  components: {
    Spinner,
    MovieCard
  },
  data: () => ({movies: [], loading: false, error: null}),
  async beforeCreate() {
      this.loading = true;
      try {
        const response = await getMovies();
        console.log(response.data.results);
        this.movies = response.data.results;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
