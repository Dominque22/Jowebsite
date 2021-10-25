<template>
  <div id="app">
    <Navigation class="homeButton" v-if="currentpage != 'Home'"/>
    <Homepage v-if="currentpage == 'Home'" msg="Joanna Matanga"/>
    <Portfolio v-if="currentpage == 'Portfolio'" />
    <About v-if="currentpage == 'About'" />
	</div>
</template>

<script>
import Homepage from './components/Homepage.vue';
import About from './components/about.vue';
import Portfolio from './components/Portfolio.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Homepage,
    Portfolio,
    About,
    Navigation
  },
  data: function() {
    return{
    }
  },
  computed: {
    currentpage: {
      get: function() {
        return this.$store.getters.currentpage;
      },
      set:  function() {
      }
    }
  },
  watch: {
    currentpage: function(){
      console.log("test "+this.$store.getters.currentpage);
    }
  },
   methods: {
    changepage: function(page){
      this.$store.commit('currentpage', page);
    },
   }
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #F3EDE2; 
}
.homeButton{
  padding: 5%;
}
</style>
