<template>
	<div class=emenu>
    <ul class="menu">
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">365</a></li>
          <li><a href="#">Hey!</a></li>
    </ul>
  </div>
</template>


<style scoped>

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
