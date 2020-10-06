<template>
  <div >
    <img class="logo" id="logo" src='../assets/logo.png'/>
    <Box index="box0" msg="START"/>
    <Box index="box1" msg="continue"/>
    <Box index="box2" msg="settings"/>
    <Box index="box3" msg="credits"/>
    <Box index="box4" msg="exit"/>
    <div id="flash" class="flash"></div>
  </div>
</template>

<script>
import Box from '@/components/menuBox.vue';

export default {
  name: 'Home',
  components: {
    Box,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.flash();
    this.music();
  },
  methods: {
    flash() {
      setTimeout(() => {
        document.getElementById('flash').classList.add('flashNow');
      }, 3000);
      document.getElementById('logo').style.opacity = '0';
      setTimeout(() => {
        document.getElementById('logo').style.opacity = '1';
      }, 3600);
    },
    music() {
      // eslint-disable-next-line global-require
      const audio = new Audio(require('@/assets/music.mp3'));
      audio.play();
      audio.volume = 0.02;
    },
  },
};
</script>
<style style="scss">
body{
  height: 100%;
  background: url('../assets/menu.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
  z-index: 0;
  font-size: 2vh;
}
.flash{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 5;
    top:0;
    left: 0;
}
.flashNow{
    animation: bum 1s 1;
}
@keyframes bum {
  0%{
    background-color: transparent;
  }
  50%{
    background-color: white;
  }
  100%{
  background-color: transparent;
  }
}
.logo{
  width:20em;
  height: auto;
  -webkit-filter: drop-shadow(4px 8px 2px #000000);
  filter: drop-shadow(4px 8px 2px #000000);
}
</style>
