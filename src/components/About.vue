<template>
	<div class="background">
		<div class="aboutcontainer">
			<div class="left-image"></div>
			<div class="bout-me">
        <div class="content">
          <p>This will be information about me. Photo will have a certain color background so this layout m. kes sense. Need this paragraph to just move DER my photo when the page is made smaller. 
            Photo will also flip (like the main portfolio page) and show a different photo when hovered.
          <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
			</div>
		</div>
    <div class="powr-form-builder" id="f89da89f_1643839465"></div>
    
    <!--div class="powr-form-builder" id="f89da89f_1643839465"></div><script src="https://www.powr.io/powr.js?platform=html"></script-->
	</div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {
  name: 'About',
  mounted: function () {
    postscribe('#f89da89f_1643839465', `<script src="https://www.powr.io/powr.js?platform=html"/><\/script>`)
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* HOME */

body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #F3EDE2; 
  }
  .background {
       background: #F3EDE2;; 
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
  .content{
    text-align: left;
  }

  .greeting{
    color:red;
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
