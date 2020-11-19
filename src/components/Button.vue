<template>
  <div
    class="btn"
    :style="{
      width: options.width || '24rem',
      height: options.height || '4rem',
      fontSize: options.fs || '1.5rem',
    }"
  >
    <div class="btn-txt">
      {{ options.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  background-color: #5dc8b6;
  box-shadow: 0px 0px 1rem 0px rgba(93, 200, 182, 0.3);
  border-radius: 2rem;
  text-align: center;
  color: #fff;
}
.btn-txt {
  height: 100%;
  display: grid;
  place-items: center;
}
</style>