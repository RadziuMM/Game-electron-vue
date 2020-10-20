<template>
  <div class="box boxBlind" :id="index" >
    <div @click="action()">
      <img src='../assets/box.png'/>
      <div class="string" >{{msg}}</div>
    </div>
  </div>
</template>

<script>
import routes from '@/router/index';
// eslint-disable-next-line global-require
const audio = new Audio(require('@/assets/music.mp3'));

export default {
  name: 'menuBox',
  data() {
    return {
    };
  },
  props: ['index', 'msg'],
  mounted() {
    this.flash();
    this.music();
  },
  methods: {
    music() {
      audio.play();
      audio.volume = 0.02;
      const sliderV = document.getElementById('volume');
      const outputV = document.getElementById('volumeH');
      outputV.innerHTML = sliderV.value;
      if (sliderV.value < 10) {
        outputV.innerHTML = `0${sliderV.value}`;
      }
      sliderV.oninput = function x() {
        outputV.innerHTML = (this.value);
        if (this.value < 100) {
          audio.volume = `0.${this.value}`;
          if (this.value < 10) {
            audio.volume = `0.0${this.value}`;
            outputV.innerHTML = `0${sliderV.value}`;
          }
        }
      };
    },
    flash() {
      const name = `${this.index}`;
      document.getElementById(name).style.opacity = '0';
      setTimeout(() => {
        document.getElementById(name).style.opacity = '1';
      }, 3600);
    },
    action() {
      if (this.index === 'box2') {
        this.settings();
      }
      if (this.index === 'box4') {
        window.close();
      }
      if (this.index === 'box0') {
        audio.pause();
        audio.currentTime = 0;
        routes.push({ path: 'Game' });
      }
    },
    settings() {
      document.getElementById('settings').style.top = '-5vh';
    },
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.box>div>img{
  height: 3.5em;
  -webkit-filter: drop-shadow(4px 8px 2px #000000);
  filter: drop-shadow(4px 8px 2px #000000);
  z-index: 7;
  position: relative;
  transition: 0.1s;
  margin-bottom: 2em;
  opacity: 1;
  &:hover{
    transform: scale(1.05,1.05);
    cursor: pointer;
  }
}
.box{
  text-align: center;
}
.boxNow{
  opacity: 1;
  animation: bum 1s 1;
}
.boxBlind{
  opacity: 1;
}
@keyframes bum {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.string{
  position: fixed;
  z-index: 7;
  height: 0;
  font-family: 'Bebas Neue', cursive;
  font-size: 2em;
  letter-spacing: 0.3em;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -2.5em;
  color: whitesmoke;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  margin-bottom: 1.5em;
  cursor: pointer;
}
.box>div:hover{
  img{
    transform: scale(1.05,1.05);
  }
}
</style>
