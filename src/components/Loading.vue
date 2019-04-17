<template>
  <div v-if="!disabled" class="loading">
    <h1>LOADING</h1>
  </div>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false}
  },
}
</script>


<style>
.loading {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading h1 {
  font-size: 10em;
}
</style>
