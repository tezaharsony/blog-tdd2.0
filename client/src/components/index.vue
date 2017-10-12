<template lang="html">
<div id="app">

  <div v-for = 'article in articles'>
    <h1>{{ article.title }}</h1>
    <div v-html="article.content">
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      articles: ''
    }
  },
  mounted () {
    var self = this
    axios.get(`http://localhost:3000/api/articles/`)
  .then(result => {
    self.articles = result.data
  })
  }
}
</script>

<style lang="css">
</style>
