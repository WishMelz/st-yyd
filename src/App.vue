<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
   height: 100%;
  font-family: "微软雅黑";
  width: 100%;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center;
  color: #2c3e50; */
}
body,html {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
h1,h2,h3,h4,h5,p{
  padding: 0;
  margin: 0;
}
.return {
  position: absolute;
  top: 2.9rem;
  left: 2rem;;
}
.return img {
  width: 2.7rem;
  height: 2.7rem;
}
.clearfix::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden; 
}
</style>
