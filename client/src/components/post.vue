<template lang="html">
<div id="app">
  <form class="form-group" @submit='addPost()'>
    <input type="text" v-model="title" name="name" value="">
    <vue-tinymce v-model="content" height="300"></vue-tinymce>
    <button type="submit" name="button">submit</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addPost () {
      var self = this
      axios.post('http://localhost:3000/api/articles', {
        title: self.title,
        content: self.content
      })
      .then(response => {
        self.$router.push(`/`)
      })
    }
  }
}
</script>

<style lang="css">
</style>
