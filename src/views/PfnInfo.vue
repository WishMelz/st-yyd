<template>
  <div class="pfn">
    <div class="banner">
      <div class="index-title">专业详情</div>
      <div class="title">
        <div class="title-icon">
          <img src="../assets/xxzy.png" alt="" />
        </div>
        <div class="title-text">
          <p>1+1 MBA</p>
          <p>(1+1公司管理硕士)</p>
        </div>
      </div>
      <img src="../assets/zhuanyexiangqing.png" alt="" />
    </div>
    <div class="score">
      <div class="score-title">
        <img src="../assets/zhuanye_chengjiduibi@2x.png" alt="" />
      </div>
      <div class="score-info">
        <div class="score-info_table">
          <table class="">
            <tr>
              <td>科目</td>
              <td>专业要求</td>
              <td>您的成绩</td>
              <td>差值</td>
            </tr>
            <tr>
              <td>GPA</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>IELTS</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>TOFEL</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>PTE</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Duolingo</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="mark">
      <div class="mark-title">
        <span></span>
        <h3>申请链接</h3>
      </div>
      <div class="mark-txt">https://adazon.cn/#/home</div>
    </div>
    <div class="mark" style="padding-top: 2rem">
      <div class="mark-title">
        <span></span>
        <h3>专业申请特殊需求</h3>
      </div>
      <div class="mark-txt">
        I am happy to join with you today in what will go do wn in history as
        the greatest demonstration for free dom in the history of our nation.
        Five score years ago, a great American, in whose symbolic shadow we
        stand today, signed the Ema ncipation Proclamation. This momentous
        decree c ame as a great beacon light of hope to millions of Negro slaves
        who had been seared in the flames of withering injustice. It came as a
        joyous daybrea k to end the long night of their captivity.
      </div>
    </div>
    <div v-if="!isfy" class="btn" @click="isfy = true">
      <div>翻译</div>
    </div>
    <div class="fy" v-if="isfy">
      <h2>翻译</h2>
      <p>
        一百年前，一位伟大的美国人签署了《解放黑奴宣
        言》，今天我们就是在他的雕像前集会。这一庄严
        宣言犹如灯塔的光芒，给千百万在那摧残生命的不
        义之火中受煎熬的黑奴带来了希望。它之到来犹如
        欢乐的黎明，结束了束缚黑人的漫长之夜。
      </p>
    </div>
    <div class="return" @click="routerReturn">
      <img src="../assets/fanhui.png" alt="" />
    </div>
    <loading v-if="canLoading"></loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isfy: false,
      canLoading: false,
    };
  },
  methods: {
    routerReturn() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.pfn {
  padding-bottom: 2rem;
}
.banner {
  position: relative;
  width: 100%;
}
.banner img {
  width: 100%;
}
.score {
  width: 335px;
  height: 250px;
  background-color: #f4fffd;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin: 0 auto;
  transform: translateY(-4rem);
  padding-bottom: 1.5rem;
}
.title {
  position: absolute;
  left: 3rem;
  top: 7.8rem;
}
.title-icon {
  float: left;
}
.title-icon img {
  width: 1.7rem;
  height: 1.8rem;
}
.title-text {
  float: left;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 700;
  padding: 0rem 0 0 1rem;
}
.index-title {
  position: absolute;
  top: 2.9rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8rem;
  color: #fff;
  font-weight: 700;
}
.score-title {
  text-align: center;
  padding: 1.5rem 0;
}
.score-title img {
  width: 16.9rem;
  height: 1.5rem;
}
.score-info {
  padding: 0 2.3rem;
}
.score-info table {
  border-collapse: collapse;
}
.score-info_table {
  border-radius: 0.5rem;
  border: solid 0.1rem #cde2de;
}
.score-info table tr:last-child td {
  border-bottom: none;
}
.score-info table td {
  border-bottom: 0.1rem solid #cde2de;
  border-right: 0.1rem solid #cde2de;
  width: 7.2rem;
  height: 3rem;
  text-align: center;
}
.score-info table tr:first-child td {
  height: 3.6rem;
}
.score-info table td:last-child {
  border-right: none;
}

.score-info table tr td:first-child {
  color: #333;
  font-size: 1.2rem;
  font-weight: 700;
}
.score-info table tr:first-child td {
  font-size: 1.3rem !important;
  font-weight: 700 !important;
  color: #666 !important;
}
.score-info_table tr td:nth-child(2),
.score-info_table tr td:nth-child(3) {
  color: #396a62;
  font-size: 1.2rem;
  font-weight: 700;
}
.score-info_table tr td:nth-child(4) {
  font-size: 1.2rem;
  color: #999;
  font-weight: 700;
}
.score-color_nn {
  color: #f31d5e;
}
.score-color_pn {
  color: #5dc8b6;
}
.mark {
  width: 32.8rem;
  margin: 0 auto;
}
.mark-title span {
  display: inline-block;
  width: 0.4rem;
  height: 1.3rem;
  background-color: #5dc8b6;
  border-radius: 0.2rem;
}
.mark-title h3 {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-stretch: normal;
  line-height: 1.8rem;
  letter-spacing: 0rem;
  color: #333333;
  padding: 0 0.5rem 0 0.9rem;
}
.mark-txt {
  padding: 1.4rem 0 0 1rem;
  font-size: 1.4rem;
  color: #666;
}
.btn {
  padding-top: 2rem;
}
.btn div {
  width: 15rem;
  height: 3.5rem;
  background-color: #5dc8b6;
  border-radius: 1.8rem;
  text-align: center;
  line-height: 3.5rem;
  font-size: 1.4rem;
  color: #fff;
  margin: 0 auto;
}
.fy {
  width: 30.7rem;
  margin: 0 auto;
}
.fy h2 {
  font-size: 1.5rem;
  color: #333;
  padding: 0.5rem 0;
}
.fy p {
  font-size: 1.4rem;
  color: #666;
}
</style>