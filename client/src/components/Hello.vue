<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">BLOG</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="http://localhost:8080">Home</a></li>
            <li><a href="http://localhost:8080/addpost">Post</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
        <Sidebar v-for="article in articles" :article="article" :key="article.id"></Sidebar>
      </div>
        <div class="col-md-10">
          <router-view></router-view>
          <!-- <h1 v-for = 'article in articles'> {{article.content}}</h1> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      articles: []
    }
  },
  components: {
    Sidebar
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
