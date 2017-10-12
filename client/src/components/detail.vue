<template lang="html">
  <div v-html="postByID.content"></div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      postByID: {}
    }
  },
  methods: {
    getOne () {
      var self = this
      axios.get(`http://localhost:3000/api/articles/${self.id}`)
      .then(result => {
        self.postByID = result.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getOne()
  },
  watch: {
    id (newId) {
      this.getOne(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
