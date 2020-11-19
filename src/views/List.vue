<template>
  <div class="list">
    <div class="banner"></div>
    <div class="title">共 <span>100</span> 所匹配学院</div>
    <div class="info">
      <div class="item">
        <div class="item-rank">
          <rank :rank="1"></rank>
        </div>
        <div class="item-rank_qs">5</div>
        <div class="avarat">
          <img src="https://dummyimage.com/75x75/cccccc" alt="" />
        </div>
        <div class="item-info">
          <div class="item-info_name">牛津大学</div>
          <div class="item-info_enname">University of Oxford</div>
          <div class="item-info_position">
            <i></i>
            <span>England - Oxford</span>
          </div>
        </div>
      </div>
      <div class="item" @click="goListInfo()">
        <div class="item-rank">
          <rank :rank="5"></rank>
        </div>
        <div class="item-rank_qs">5</div>
        <div class="avarat">
          <img src="https://dummyimage.com/75x75/cccccc" alt="" />
        </div>
        <div class="item-info">
          <div class="item-info_name">牛津大学</div>
          <div class="item-info_enname">University of Oxford</div>
          <div class="item-info_position">
            <i></i>
            <span>England - Oxford</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ai-btn" @click="goAiMatch">
      <div class="btn">AI智能筛选</div>
    </div>
    <div class="return" @click="routerReturn">
      <img src="../assets/fanhui.png" alt="">
    </div>
    <loading v-if="canLoading"></loading>
  </div>
</template>

<script>
export default {
  data(){
    return{
      canLoading:false
    }
  },
  methods:{
    routerReturn(){
      this.$router.go(-1)
    },
    goAiMatch(){
      this.$router.push('/aiMatch')
    },
    goListInfo(){
      this.$router.push('/ListInfo')
    }
  },
  created(){
    // let data = 
    console.log(this.$route.query);
  }
};
</script>

<style scoped>
.banner {
  height: 14rem;
  background: url(../assets/xuexiaoliebiao.png);
  background-size: cover;
}
.title {
  height: 5rem;
  width: 20rem;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 1rem 0px rgba(93, 200, 182, 0.3);
  border-radius: 0.5rem;
  transform: translateY(-50%);
  line-height: 5rem;
  font-size: 1.5rem;
  color: #010101;
  font-weight: 700;
}
.title span {
  color: #5dc8b6;
  font-size: 2.2rem;
}
.item {
  position: relative;
  padding: 2.3rem 0 2.3rem 7rem;
  width: 33.5rem;
  margin: 1.5rem auto 0 auto;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border: solid 0.1rem #f7f7f7;
  overflow: hidden;
  background: url(../assets/xuexiaoliebiao_paiming@2x.png);
  background-size: cover;
}
.item:first-child {
  margin-top: 0;
}
.avarat {
  float: left;
  width: 7.5rem;
  height: 7.5rem;
  background-color: #0e1e3d;
  box-shadow: 0px 0.5rem 0.5rem 0px rgba(4, 17, 43, 0.2);
  border-radius: 50%;
}
.avarat img {
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;

}
.item-info {
  float: left;
  padding-left: 1.5rem;
  padding-top: 1rem;
}
.item-info_name {
  font-size: 1.5rem;
  color: #000;
  font-weight: 700;
}
.item-info_enname {
  font-size: 1.3rem;
  color: #999;
}

.item-info_position i {
  display: inline-block;
  width: 1rem;
  height: 1.2rem;
  background: url(../assets/dingwei@2x.png);
  background-size: cover;
}
.item-info_position span {
  font-size: 1.2rem;
  color: #999;
  line-height: 1.8rem;
  padding-left: 0.2rem;
}
.item-rank {
  position: absolute;
  top: 0;
  left: 2.4rem;
}
.item-rank_qs {
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-size: 1.9rem;
  color: #fff;
}
.ai-btn {
  text-align: center;
  position: fixed;
  bottom: 2rem;
  width: 100%;
}
.ai-btn .btn {
  margin: 0 auto;
  font-size: 1.6rem;
  color: #fff;
  line-height: 5rem;
  width: 31rem;
  height: 5rem;
  background-image: linear-gradient(-90deg, #5dc8b6 0%, #73dcca 100%),
    linear-gradient(#5dc8b6, #5dc8b6);
  background-blend-mode: normal, normal;
  box-shadow: 0px 0px 1.8rem 0px rgba(9, 134, 113, 0.3);
  border-radius: 2.5rem;
}
</style>