<template>
  <div class="listInfo">
    <div class="banner">
      <img src="../assets/t.jpg" alt="" />
    </div>
    <div class="cark clearfix">
      <div class="cark-icon">
        <span>2</span>
      </div>
      <div class="cark-avarat">
        <img src="https://dummyimage.com/75x75/cccccc" alt="" />
      </div>
      <div class="cart-top">
        <h2>牛津大学</h2>
        <h3>University of Oxford</h3>
      </div>
      <div class="cart_position">
        <i></i>
        <span>England - Oxford</span>
      </div>
      <div class="cart-msg">
        <div class="isall" @click="isAll = !isAll">
          <span v-if="!isAll">全部</span>
          <span v-else>收起</span>
        </div>
        <div :class="isAll ? '' : 'cart-msg_info'">
          "牛津大学（University of Oxford），简称“牛
          津”（Oxford），位于英国牛津，世界顶尖的
          公立研究型大学，采用书院联邦制。" "牛津大学（University of
          Oxford），简称“牛 津”（Oxford），位于英国牛津，世界顶尖的
          公立研究型大学，采用书院联邦制。"
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info-title">
         <span></span>
          <h3>匹配专业</h3>
      </div>
      <div class="info-item clearfix">
        <div class="item-rank">
          <img src="../assets/rank1.png" alt="" />
          <!-- <span class="item-rank_num">2</span> -->
        </div>
          <div class="item-icon">
            <img src="../assets/xxzy.png" alt="">
          </div>
          <div class="item-text">
            <p>1+1MBAasdfasdfsdfasd</p>
            <p>(1+1公司管理硕士)</p>
          </div>
          <div class="item-btn">
            <div class="btn">查看详情</div>
          </div>
      </div>
      <div class="info-item clearfix">
        <div class="item-rank">
          <img src="../assets/rank1.png" alt="" />
          <!-- <span class="item-rank_num">2</span> -->
        </div>
          <div class="item-icon">
            <img src="../assets/xxzy.png" alt="">
          </div>
          <div class="item-text">
            <p>1+</p>
            <p>(1+1公司管理硕士)</p>
          </div>
          <div class="item-btn" @click="goPfn">
            <div class="btn">查看详情</div>
          </div>
      </div>
    </div>

    <div class="return" @click="routerReturn">
      <img src="../assets/fanhui.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAll: false,
      isAllText: "全部",
    };
  },
  methods: {
    routerReturn() {
      this.$router.go(-1);
    },
    goPfn(){
      this.$router.push('/PfnInfo')
    }
  },
};
</script>

<style scoped>
.listInfo {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.banner img {
  width: 100%;
  height: 22.5rem;
  border-radius: 0px 0px 2rem 2rem;
}
.cark {
  position: relative;
  width: 32.5rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  transform: translateY(-5rem);
  margin: 0 auto;
  padding-left: 2.6rem;
  padding-bottom: 1.5rem;
  box-sizing: border-box;
}
.cark-avarat {
  position: absolute;
  left: 2rem;
  top: -2.5rem;
}
.cark-avarat img {
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  border: 0.5rem solid #fff;
}
.cart-top {
  padding-top: 1.5rem;
  padding-left: 9.5rem;
}
.cart-top h2 {
  font-size: 1.5rem;
  font-weight: 700;
}
.cart-top h3 {
  font-size: 1.3rem;
  color: #999;
}
.cart_position {
  padding-top: 1.6rem;
}
.cart_position i {
  display: inline-block;
  width: 1rem;
  height: 1.2rem;
  background: url(../assets/dingwei@2x.png);
  background-size: cover;
}
.cart_position span {
  font-size: 1.2rem;
  color: #999;
  line-height: 1.8rem;
  padding-left: 0.2rem;
}
.cart-msg {
  position: relative;
  padding-top: 1.3rem;
  font-size: 1.4rem;
  color: #666;
  line-height: 1.8rem;
}
.cart-msg .isall {
  position: absolute;
  bottom: 0;
  right: 0rem;
  color: #5dc8b6;
  background: #fff;
  padding: 0 2rem;
  text-decoration: underline;
}
.cart-msg_info {
  max-height: 5.4rem;
  overflow: hidden;
}
.cark-icon {
  width: 6.3rem;
  height: 6.2rem;
  font-size: 2rem;
  text-align: center;
  line-height: 7rem;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  background: url(../assets/QS@2x.png);
  background-size: cover;
  transform: translateY(-40%) translateX(30%);
}
.cark-icon span {
  display: block;
  transform: rotate(10deg);
}
.info-title {
  padding-bottom: 1.5rem;
}
.info-title span{
    display: inline-block;
  width: 0.4rem;
  height: 1.3rem;
  background-color: #5dc8b6;
  border-radius: 0.2rem;
}
.info-title h3{
    display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-stretch: normal;
  line-height: 1.8rem;
  letter-spacing: 0rem;
  color: #333333;
  padding: 0 0.5rem 0 0.9rem;
}
.info {
  width: 32.5rem;
  margin: 0 auto;
}
.info-item {
  position: relative;
  width: 100%;
  padding-bottom: 2.1rem;
  background-color: #ffffff;
	box-shadow: 0px 0px 5px 0px 
		rgba(0, 0, 0, 0.15);
	border-radius: 5px;
  background: url(../assets/xuexiaozhuanye_zhuangshi.png);
  background-position-y: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  margin-top: 1.5rem;
}
.info-item:first-child {
  margin-top: 0;
}
.item-icon {
  float: left;
  padding: 2rem 0 0 6.5rem;
}
.item-icon img{
  width: 1.7rem;
  height: 1.8rem;
}
.item-rank {
   width: 3rem;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 1.5rem;
}
.item-rank img{
  width: 3rem;
  height: 4rem;
}
.item-rank_num{
    font-size: 1.5rem;
  color: #fff;
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  width: 100%;
  text-align: center;
}
.item-text {
  float: left;
  font-size: 1.4rem;
  color: #000;
  font-weight: 700;
  padding: 2.4rem 0 0 1rem;
}
.item-text p:first-child {
  max-width: 13.7rem;
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
}
.item-btn {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  /* padding: 2.4rem 2rem 0 0; */
}
.item-btn .btn{
  width: 6rem;
	height: 2.5rem;
	border-radius: .5rem;
	border: solid .1rem #5dc8b6;
  color: #5dc8b6;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2.5rem;
  font-weight: 700;
}
</style>