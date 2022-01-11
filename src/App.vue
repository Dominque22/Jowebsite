<template>   
  <div id="app">
    <Navigation class="homeButton" />
    <Homepage v-if="currentpage == 'Home'" msg="Joanna Matanga"/>
    <Portfolio v-if="currentpage == 'Portfolio'" />
    <About v-if="currentpage == 'About'" />
    <Popup v-if="currentpage == 'Overlay'" />
	</div>
</template>

<script>
import Homepage from './components/Homepage.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Navigation from './components/Navigation.vue';
import Popup from './components/Popup.vue';

export default {
  name: 'App',
  components: {
    Homepage,
    Portfolio,
    About,
    Navigation,
    Popup,
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
    },
  },
  watch: {
    currentpage: function(){
      //console.log("test "+this.$store.getters.currentpage);
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

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
</style>
