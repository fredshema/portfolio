<template>
  <transition>
    <router-view class="bg-dark" />
  </transition>
</template>

<script>
export default {
  name: "app-dashboard",
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--light);
  width: 100%;
}
</style>