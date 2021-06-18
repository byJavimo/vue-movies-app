<template>
    <ul class="navbar">
        <router-link v-for="(page, index) in pages" :key="index" :to="page.url"> {{page.name}}</router-link>
    </ul>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
      pages: Array
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
