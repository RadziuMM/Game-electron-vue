<template>
  <div id="MM" >
    <img class="logo" id="logo" src='../assets/logo.png'/>
    <Box index="box0" msg="START"/>
    <Box index="box1" msg="continue"/>
    <Box index="box2" msg="settings"/>
    <Box index="box3" msg="credits"/>
    <Box index="box4" msg="exit"/>
    <div id="settings" class="settings">
      <div id="close" @click="sClose()">
        X
      </div>
      <Slider name="volume" numberN="volumeH" nValue="02"/>
      <Slider name="gamma" numberN="gammaH" nValue="0"/>
    </div>
    <div id="flash" class="flash"></div>
    <div class="backgroundM"></div>
  </div>
</template>

<script>
import Box from '@/components/menuBox.vue';
import Slider from '@/components/slide.vue';

export default {
  name: 'Home',
  components: {
    Box,
    Slider,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.flash();
    this.gamma();
    window.oncontextmenu = function x() {
      return false;
    };
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
    sClose() {
      document.getElementById('settings').style.top = '-200vh';
    },
    gamma() {
      const sliderG = document.getElementById('gamma');
      const outputG = document.getElementById('gammaH');
      outputG.innerHTML = sliderG.value;
      if (sliderG.value < 10) {
        outputG.innerHTML = `0${sliderG.value}`;
      }
      sliderG.oninput = function x() {
        outputG.innerHTML = (this.value);
        if (this.value < 100) {
          document.getElementById('gammaD').style.opacity = `0.${this.value}`;
        }
        if (this.value < 10) {
          document.getElementById('gammaD').style.opacity = `0.0${this.value}`;
          outputG.innerHTML = `0${sliderG.value}`;
        }
      };
    },
  },
};
</script>
<style style="scss">
body{
  position: fixed;
  margin: 0;
  margin-left:50%;
  transform: translate(-50%);
  padding: 0;
  text-align: center;
  z-index: 0;
  font-size: 2vh;
}
.backgroundM{
  position: fixed;
  top:0;
  left: -50vw;
  height: 100vh;
  width: 150vw;
  z-index: 1;
  background: url('../assets/menu.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.flash{
  position: fixed;
  width: 500vh;
  height: 110vh;
  z-index: 5;
  top:0;
  left: -100vh;
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
  position: relative;
  z-index:7;
  width:20em;
  height: auto;
  -webkit-filter: drop-shadow(4px 8px 2px #000000);
  filter: drop-shadow(4px 8px 2px #000000);
}
.settings{
  position: fixed;
  width: 43vw;
  height: 100vh;
  z-index: 7;
  padding-top: 7vh;
  top: -200vh;
  left: 50%;
  transform: translate(-50%);
  background-image: url('../assets/sBG.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px white double;
}
.dark{
  opacity: 0;
  content: "";
  position: fixed;
  z-index: 100;
  top: 0; bottom: 0; left: -100vh; right: 0;
  height: 100vh;
  width:500vh ;
  background: rgb(0, 0, 0);
  pointer-events: none;
}

</style>
