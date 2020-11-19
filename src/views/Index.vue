<template>
  <div class="idnex">
    <div class="banner"></div>
    <div class="info">
      <h2>请输入成绩</h2>
      <div class="item">
        <div class="item-top">
          <span></span>
          <h3>GPA成绩</h3>
          <h4>(平均学分成绩)</h4>
        </div>
        <div class="item-inp">
          <input type="text" placeholder="必填；例如：3.0" />
        </div>
      </div>

      <div class="item">
        <div class="item-top">
          <span></span>
          <h3>IELTS成绩</h3>
          <h4>(雅思成绩)</h4>
        </div>
        <div class="item-inp">
          <input type="text" placeholder="必填；例如：7.5" />
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <span></span>
          <h3>TOFEL成绩</h3>
          <h4>(托福成绩)</h4>
        </div>
        <div class="item-inp">
          <input type="text" placeholder="例如：110" />
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <span></span>
          <h3>PTE成绩</h3>
          <h4>(培生学术英语成绩)</h4>
        </div>
        <div class="item-inp">
          <input type="text" placeholder="例如：80" />
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <span></span>
          <h3>Duolingo成绩</h3>
          <h4>(多邻国成绩)</h4>
        </div>
        <div class="item-inp">
          <input type="text" placeholder="例如：130" />
        </div>
      </div>
      <div class="bottom">
        <div class="btn" @click="getData">获取匹配结果</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        getData(){
            let tar = /^\d+(\.\d+)?$/
            let aa = '120'
            console.log(tar.test(aa));
            this.$router.push('/List')
        }
    }
};
</script>

<style scoped>
.banner {
  height: 20.4rem;
  background: url(../assets/shouye.png);
  background-size: cover;
}
.info h2 {
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.8rem;
  letter-spacing: 0rem;
  color: #333333;
  text-align: center;
  font-weight: 700;
  padding-bottom: 1.8rem;
  padding-top: 2rem;
}
.info {
    padding-bottom: 3rem;
  margin-top: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 1.5rem 0px rgba(93, 200, 182, 0.3);
  border-radius: 0px 7.5rem 0px 0px;
  border: solid 0.1rem #f8f8f8;
  border-bottom: none;
}
.item {
  width: 24.1rem;
  margin: 0 auto;
  padding-top: 2rem;
}
.item:first-child {
  padding-top: 0;
}
.item-top {
  padding-bottom: 1rem;
}
.item-top span {
  display: inline-block;
  width: 0.4rem;
  height: 1.3rem;
  background-color: #5dc8b6;
  border-radius: 0.2rem;
}

.item-top h3 {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-stretch: normal;
  line-height: 1.8rem;
  letter-spacing: 0rem;
  color: #333333;
  padding: 0 0.5rem 0 0.9rem;
}
.item-top h4 {
  display: inline-block;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.8rem;
  letter-spacing: 0rem;
  color: #999999;
}
.item-inp input {
  width: 24rem;
  height: 4rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: solid 0.1rem #b7cbc8;
  padding-left: 1.6rem;
  box-sizing: border-box;
  outline: none;
}
.item-inp input::-webkit-input-placeholder {
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #999;
}
.bottom {
    padding-top: 3rem;
}
.bottom .btn{
    font-size: 1.5rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: 1.8rem;
	letter-spacing: 0px;
	color: #ffffff;
    width: 24rem;
	height: 4rem;
	background-color: #5dc8b6;
	box-shadow: 0px 0px 1rem 0px 
		rgba(93, 200, 182, 0.3);
	border-radius: 2rem;
    margin: 0 auto;
    text-align: center;
    line-height: 4rem;
}
</style>
