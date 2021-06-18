<template>
    <div class="movie-card">
        <img :src="`${IMG_BASE_URL}/${imageSize}${data.poster_path}`"/>
        <span>{{data.vote_average}}</span>
        <h2> {{data.title}} </h2>
    </div>
</template>

<script>
import {IMG_BASE_URL} from '../services/movies.api.js';

export default {
  name: 'MovieCard',
  props: ['data'],
  data: () => ({ IMG_BASE_URL: IMG_BASE_URL, imageSize: 'w200' })
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