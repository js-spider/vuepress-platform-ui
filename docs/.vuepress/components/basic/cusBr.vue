<template>
  <div class="cur-br" :style="{ height: `${line * 8}px` }"></div>
</template>
<script>
export default {
  name: "CurBr",
  props: {
    line: {
      type: [String, Number],
      default: 1,
    },
  },
};
</script>
<style>
.cur-br {
  width: 100%;
  height: 8px;
}
</style>
