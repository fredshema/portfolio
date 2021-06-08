<template>
  <transition>
    <router-view class="bg-dark" />
  </transition>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
</style>