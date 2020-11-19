<template>
  <div class="loading">
    <div class="loading-info">
      <p>{{title}}</p>
      <div class="loading-img">
        <img src="../assets/loading.png" alt="" />
      </div>
      <div v-if="canSubTitle" class="loading-msg">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canSubTitle: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "正在匹配",
    },
    subTitle: {
      type: String,
      default: "匹配结果可能需要10几秒 时间，请您耐心等待~",
    },
  },
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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
}
</style>