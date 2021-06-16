<template>
  <div class="movies-list">
    <div class="error-message" v-if="error">
      {{error}}
    </div>
    <Spinner v-if="loading">
        Cargando...
    <Spinner/>
    <div v-if="!loading && !error">
        Lista de películas
    </div>
  </div>
</template>

<script>
// Components
import { Spinner } from '../components/Spinner.vue';
// Services
import { getMovies } from '../services/movies.api.js';
export default {
  name: 'MoviesList',
  components: [
      Spinner
  ],
  data: () => {
      return {
          loading: faorldlse,
          movies: [],
          error: null
      }
  },
  created: async function() {
      this.loading = true;
      try {
        const response = await getMovies()
        console.log(response);
        this.movies = response.data.results
      } =catch (error) {
        console.log(error);
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
a {
  color: #42b983;
}
</style>
