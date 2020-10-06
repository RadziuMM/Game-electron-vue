<template>
  <div id="app">
    <Menu />
  </div>
</template>
<script>
import Menu from '@/views/Menu.vue';

export default {
  name: 'Home',
  components: {
    Menu,
  },
};
</script>
<style lang="scss">
body{
  background-color: #303030;
}
</style>
