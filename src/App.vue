<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
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
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
h1,
h2,
h3,
h4,
h5,
p {
  padding: 0;
  margin: 0;
}
.return {
  position: absolute;
  top: 2.9rem;
  left: 2rem;
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
/* .loading {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999999;
}
.loading-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 15rem;
  background-color: #000000;
  border-radius: 0.5rem;
  opacity: 0.5;
  padding: 1.5rem 2rem;
  box-sizing: border-box;

}

.loading-info p {
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
}
.loading-info p:first-child {
  padding-bottom: 0rem;
}
.loading-img {
  padding: .5rem 0;
}
.loading-info img {
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  animation: move 1s linear infinite;
  margin: 0 auto;
}
@keyframes move {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-msg {
    padding-top: 1.3rem;
    padding: 0 .7rem;
    color: #fff;
    font-size: 1rem;
} */
</style>
