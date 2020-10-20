<template>
  <div id="app">
    <div class="dark" id="gammaD"></div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
  },
  mounted() {
    window.oncontextmenu = function x() {
      return false;
    };
  },
};
</script>
<style lang="scss">
</style>
