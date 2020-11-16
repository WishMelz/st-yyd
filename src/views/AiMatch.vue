<template>
  <div class="match">
    <div class="info">
      <textarea
        placeholder="输入一句话描述自己的品格性格或
未来想从事的职业。
例如：我开朗活泼，喜欢新事物，
热爱挑战，有责任心，关心朋友，
以后想当医生。"
      ></textarea>
      <div class="btn" @click="match">匹配结果</div>
    </div>
    <div class="loading" v-if="loading">
      <div class="loading-info">
        <p>正在匹配</p>
        <div>
          <img src="../assets/loading.png" alt="" />
        </div>
        <div class="loading-msg">匹配结果可能需要10几秒 时间，请您耐心等待~</div>
      </div>
    </div>
    <div class="return" @click="routerReturn">
      <img src="../assets/fanhui.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            loading:false
        }
    },
    methods:{
        match(){
            this.loading = true
            setTimeout(()=>{
                 this.loading = false;
                 this.$router.push('/List') 
            },3000)
        },
        routerReturn(){
      this.$router.go(-1)
    },
    }
};
</script>

<style scoped>
.match {
  height: 100%;
  background: url(../assets/gerenmiaoshu.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.info {
  position: absolute;
  top: 18.4rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.info textarea {
  width: 21.9rem;
  height: 9.8rem;
  resize: none;
  border: none;
}
.info textarea:focus {
  border: none;
  outline: none;
}
.info textarea::placeholder {
  font-size: 1.4rem;
  color: #999;
  opacity: 0.8;
}
.btn {
  width: 12.5rem;
  height: 3.3rem;
  background-color: #5dc8b6;
  box-shadow: 0px 0px 0.5rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 1.7rem;
  color: #fff;
  font-size: 1.5rem;
  line-height: 3.3rem;
  margin: 0 auto;
}
.loading {
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
  height: 11.9rem;
  background-color: #000000;
  border-radius: 0.5rem;
  opacity: 0.5;
}
.loading-info p {
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
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