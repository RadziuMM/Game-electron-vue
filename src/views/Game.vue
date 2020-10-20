<template>
  <div class="background">
    <button @click="back()">back</button>
    <Map />
  </div>
</template>

<script>
import routes from '@/router/index';
import Map from '@/components/map.vue';

export default {
  name: 'Game',
  components: {
    Map,
  },
  data() {
    return {
    };
  },
  methods: {
    back() {
      routes.push({ path: '/' });
    },
  },
};
</script>
<style style="scss" scope>
  body{
    background-color: #303030;
  }
</style>
