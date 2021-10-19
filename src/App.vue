<template>
  <div id="app">
		<section>
			<h1>Joanna Matanga</h1>
			<div class="navi">
				<ul>
				<li><a style="text-decoration: none">About</a></li>
				<li><a href="" style="text-decoration: none">Portfolio</a></li>
				<li><a href="" style="text-decoration: none">365</a></li>
				<li><a href="" style="text-decoration: none">Hi</a></li>
				</ul>
			</div>
		</section>
    <Portfolio v-if="port == true" />
    <About v-if="aboutTab == true" />
	</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Homepage from './components/Homepage.vue'
import About from './components/about.vue';
import Portfolio from './components/Portfolio.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Homepage
    Portfolio,
    About
  },
  data: function() {
    return{
      port: false,
      aboutTab: false,
    }
  },
   methods: {
     checkStatus: function(tab){
       if(tab == true){
         return false;
       }else{
         return true;
       }
     }
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
  margin-top: 60px;
}
body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #F3EDE2; 
  }

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

  .navi a {
    display: inline-block;
    padding: 50px;
    color: #212121;
    font-family: helvetica-bold;
    font-size: 25px;
    letter-spacing: 1px;

  }

.Navi a:hover {
color: #9FA694;
text-decoration: underline;

}

.navbar{
    width: 90%;
    align-items: center;
    margin: auto;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
}

.navbar ul li {
    list-style: none;
    margin: 200px 0;
    color: #212121;
    font-family: helvetica-bold;

}

.navbar ul li a{
    text-decoration: none;
    color: #212121;
    font-size: 25px;
    padding: 10px;
    letter-spacing: 1px;
    position: relative;

}

.navbar ul li a::after{
content:'';
height: 3px;
background: #8f9682;
position: absolute;
bottom: 0;
left: 0;
}

.navbar ul li a:hover{
    color: #9FA694;
    }


    /* E TO M MENU */
.header {
        position: absolute;
         left: 90%;
           top: 20%
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
        display: none;
        margin: 50px 0; 
      
      }
      
      ul, li {
        margin: 50px 0;
        text-align: center;
          text-decoration: none;
       
      }
      
      ul {
        
      }
      
      li{
        
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

          /* ABOUT */

        .blank {
          min-height: 50vh;
        }
        .bodyabout{
          min-height: 100vh;
          width: 100%;
          align-items: center;
          justify-content: center;
          background-color: #EDE3D4;
        }       

 .aboutcontainer {
  width: 90%;
    max-width: 1000px;
  margin: 0 auto; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-image{
  width: 30%;
  height: 400px;
  background: cyan no-repeat center /cover;
}

.bout-me{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 25px;
  margin-left: -50px;
}

.quote {
  text-align: center;
}

.footer{
  padding: 50px;
}
@media only screen and (max-width: 768px){
  .container{
    flex-direction: column;
  }
  .left-image{
    width: 50%;
  }
  .bout-me {
    width: 80%;
    margin: 0;
    
  }
  .bout-me h1{
    text-align: center;
    margin: -10px;
  }
  .bout-me p{
    padding: 20px;
  }
}

 
  /* PORTFOLIO SECTION */

 
 .blank {
   min-height: 50vh;
 }
 
 /* entire container, keeps perspective */
 .flip-container {
   perspective: 1000px;
 }
   /* flip the pane when hovered */
   .flip-container:hover .flipper, .flip-container.hover .flipper {
     transform: rotateY(180deg);
   }
 
 .flip-container, .front, .back {
   width: 490px;
   height: 270px;
   /*box-shadow: 0 15px 25px 0 
               rgba(0,0,0, .25)*/
 }
 
 /* flip speed goes here */
 .flipper {
   transition: 0.8s;
   transform-style: preserve-3d;
   position: relative;
 }
 
 /* hide back of pane during swap */
 .front, .back {
   backface-visibility: hidden;
   position: absolute;
   top: 0;
   left: 0;
 }
 
 /* front pane, placed above back */
 .front {
   z-index: 2;
   background: cyan;
   /* for firefox 31 */
   transform: rotateY(0deg);
 }
 
 /* back, initially hidden pane */
 .back {
   transform: rotateY(180deg);
   background: yellow;
 }
 
 
 .portcontainer {
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-wrap: wrap;
   gap: 50px;
 }
 
</style>
