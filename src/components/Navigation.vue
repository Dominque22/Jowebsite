<template>
	<div  class="background"  @click="changepage('Overlay')">
		<div class="display" >
			<div class="hamburger">
				<div class="menu-btn1"></div>
				<div class="menu-btn2"></div>
				<div class="menu-btn3"></div>
			</div>
		</div>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
   data: function() {
    return{
		backgroundPage: ''
    }
  },
  methods: {
    changepage: function(page){
		if(this.currentpage != 'Overlay'){
			this.backgroundPage =this.currentpage;
			this.$store.commit('currentpage', page);
		}
		else{
			this.$store.commit('currentpage', this.backgroundPage);
		}
   },
   updateToggle: function(){
		console.log("toggle");
		const hamburger = document.querySelector(".hamburger");
		if(this.currentpage == "Overlay"){
			hamburger.classList.add("active");
		}else{
			hamburger.classList.remove("active");
		}
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
		this.updateToggle();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* E TO M MENU */
.display {
position: absolute;
	left: 94%;
	top: 1%;
	cursor: pointer
}
.background {
       background: #F3EDE2;; 
  }
.display:hover {
  color: #9FA694;
  text-decoration: underline;
}
.hamburger {
	width: 30px;
	height: 15px;
	justify-content: center;
}

.menu-btn1,.menu-btn3 {
	width: 30px;
	height: 2px;
	margin: 6px;
	background: black;
	position: relative;
	transition: all .4s;
}

.menu-btn2 {
	width: 20px;
	height: 2px;
	margin: 6px;
	background: black;
	position: relative;
	transition: all .4s;
}

.hamburger.active .menu-btn1 {
	transform: rotateZ(-90deg) translate(-16px, 18px);
}

.hamburger.active .menu-btn2 {
	top: 50%;
	transform: translateY(-50%) rotate(-450deg) translate(-1.5px, 10px);
}

.hamburger.active .menu-btn3 {
	transform: rotateZ(90deg) translate(0px, 8px);
}

/* INSIDE MENU BELOW */
.menu {
	margin: 50px 0; 
}

ul, li {
	margin: 50px 0;
	text-align: center;
	text-decoration: none;
}
.menu.active {
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	background: white;
	color: green;
	list-style-type: none;
	z-index: 2;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center; 
	vertical-align: middle;
	text-decoration: none;
}

.menu a:hover {
	color: black;
	text-decoration: none;
}
</style>
