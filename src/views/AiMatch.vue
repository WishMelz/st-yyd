<template>
  <div class="match">
    <div class="mark">
    <div class="title">
      <h2>个人描述：</h2>
      <h3>(请输入描述，我们会通过AI算法协助您选择专业）</h3>
    </div>
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
    </div>
    <div class="return" @click="routerReturn">
      <img src="../assets/fanhui.png" alt="">
    </div>
      <loading v-if="canLoading" :canSubTitle="true"></loading>
  </div>
</template>

<script>
export default {
    data(){
        return {
            canLoading:false
        }
    },
    methods:{
        match(){
            this.canLoading = true
            setTimeout(()=>{
                 this.canLoading = false;
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
.mark {
  position: absolute;
  top: 15.4rem;
  left: 50%;
  transform: translateX(-50%);
}
.title h2 {
  font-size: 1.4rem;
 
}
.title h3 {
  font-size: 1.2rem;
}
.title {
   color: #5dc8b6;
  font-weight: 700;
  padding-bottom: .8rem;
  padding-left: 4.8rem;
}
.info {
  text-align: center;
  width: 31rem;
  background: #fff;
  border-radius: 7rem;
  padding: 2.2rem;
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

</style>