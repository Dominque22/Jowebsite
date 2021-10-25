<template>
	<div>
		<section>
			<h1>{{ msg }}</h1>
			<div class="navi">
				<ul>
				<li><button @click="changepage('About')">About</button></li>
				<li><button @click="changepage('Portfolio')">Portfolio</button></li>
				<li><button @click="changepage('Portfolio')">365</button></li>
				<li><button @click="changepage('Portfolio')">Hi</button></li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>

export default {
  name: 'Homepage',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* HOME */


  .navi {
    background: #F3EDE2; 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    text-align: center;
  }

  .navi li {
    display: inline;
    
  }

  button{
    background: #F3EDE2;
    border: none;
    cursor: pointer;
  }
  button {
    display: inline-block;
    padding: 50px;
    color: #212121;
    font-family: helvetica-bold;
    font-size: 25px;
    letter-spacing: 1px;

  }

button:hover {
  color: #9FA694;
  text-decoration: underline;
}

</style>
