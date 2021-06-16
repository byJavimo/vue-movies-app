<template>
  <div class="error-message" v-if="error">
    {{error}}
  </div>
  <Spinner v-if="loading">
    Cargando...
  </Spinner>
  <div class="movie-detail" v-if="!loading && !error">
    <div class="movie-poster">
        <img :src="${IMG_BASE_URL}movie">
    </div>
    <h1>{{movie.title}}</h1>
    <h3>{{movie.tagline}}</h3>
    <time :datetime="movie.release_date">{{movie.release_date}}</time>
  </div>
</template>

<script>
import { getMovieDetail, IMG_BASE_URL } from '../services/movies.api.js';
import { Spinner } from '../components/Spinner.vue';
export default {
  name: 'MovieDetail',
  data() => ({IMG_BASE_URL: IMG_BASE_URL, movie: null, loading: false, error: null, similarMovies: null})
  async created() {
      this.loading = true;
      try {
        const id = this.$route.params.id;
        const response = await getMovieDetail(id);
        const similarResponse= await getSimiliarMovies(id);
        this.movie = response;
        this.similarMovies = similarResponse;
      } catch(error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
