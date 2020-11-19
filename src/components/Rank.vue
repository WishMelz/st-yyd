<template>
  <div class="rank" v-if="rank != 0">
    <!-- <img :src="rankImg" alt="" /> -->
    <img v-if="rank == 1" src="../assets/rank1.png" alt="">
    <img v-if="rank == 2" src="../assets/rank2.png" alt="">
    <img v-if="rank == 3" src="../assets/rank3.png" alt="">
    <img v-if="rank > 3" src="../assets/ranks.png" alt="">
    <span v-if="rank > 3" class="rank-num">{{ rank }}</span>
  </div>
</template>

<script>

export default {
  props: {
    rank: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    
    };
  }
};
</script>

<style scoped>
.rank {
  width: 3rem;
  height: 4rem;
  position: relative;
}
.rank img {
  width: 3rem;
  height: 4rem;
}
.rank-num {
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>