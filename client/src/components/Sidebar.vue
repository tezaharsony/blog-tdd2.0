<template lang="html">
  <div>
    <router-link :to="'/' + article._id" >
        <div class="list-group">
          {{ article.title }}
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css">
</style>
