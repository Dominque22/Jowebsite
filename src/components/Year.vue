<template>
	<div  class="background">
    <h1>365</h1>
    <h3>today feels like a good day to try again.</h3>
  </div>
</template>
<script>
export default {
  name: 'Year',
  props: {
    msg: String
  },
  components: {
  },
  methods: {
    changepage: function(page){
      this.$store.commit('currentpage', page);
   },
  }
}
</script>
<style scoped>
.background {
       background: #F3EDE2;
  }
</style>