<template>
  <div >
    <Fog />
      <div class="wrapper">
      <div id="hero" class="hero">
          <div id="heroMove" class="hBody"></div>
          <div id="lArm" class="arm lArm"></div>
          <div id="rArm" class="arm rArm"></div>
          <div id="lLeg" class="leg"></div>
          <div id="rLeg" class="leg"></div>
          <div id="sword" class="sword"></div>
          <div class="shield"></div>
      </div>
      </div>
  </div>
</template>

<script>
import Fog from './darkFog.vue';

let move = false;
let left = false;
let right = false;
let back = false;
export default {
  name: 'menuBox',
  components: {
    Fog,
  },
  data() {
    return {
      x: '16',
    };
  },
  mounted() {
  },
  methods: {
    moveMe() {
      if (move === false) {
        document.getElementById('heroMove').classList.add('heroMove');
        document.getElementById('lLeg').classList.add('lLeg');
        document.getElementById('rLeg').classList.add('rLeg');
        move = true;
      } else {
        document.getElementById('heroMove').classList.remove('heroMove');
        document.getElementById('lLeg').classList.remove('lLeg');
        document.getElementById('rLeg').classList.remove('rLeg');
        move = false;
      }
    },
    moveLeft() {
      if (back === true) { this.moveBack(); }
      if (right === true) {
        document.getElementById('hero').style.transform = 'scaleX(1)';
        right = false;
      } else {
        // eslint-disable-next-line no-lonely-if
        if (left === false) {
          left = true;
          document.getElementById('heroMove').classList.add('LeftB');
          document.getElementById('lArm').classList.add('LeftA');
          document.getElementById('lLeg').classList.add('LeftL');
          document.getElementById('rLeg').classList.add('LeftL');
          document.getElementById('sword').classList.add('LeftS');
          document.getElementById('rArm').style.display = 'none';
        } else {
          left = false;
          document.getElementById('heroMove').classList.remove('LeftB');
          document.getElementById('lArm').classList.remove('LeftA');
          document.getElementById('lLeg').classList.remove('LeftL');
          document.getElementById('rLeg').classList.remove('LeftL');
          document.getElementById('sword').classList.remove('LeftS');
          document.getElementById('rArm').style.display = 'block';
        }
      }
    },
    moveRight() {
      if (back === true) { this.moveBack(); }
      if (right === false) {
        if (left === false) {
          this.moveLeft();
          document.getElementById('hero').style.transform = 'scaleX(-1)';
        } else {
          document.getElementById('hero').style.transform = 'scaleX(-1)';
        }
        right = true;
      } else {
        right = false;
        if (left === false) {
          document.getElementById('hero').style.transform = 'scaleX(1)';
        } else {
          this.moveLeft();
          document.getElementById('hero').style.transform = 'scaleX(1)';
        }
      }
    },
    moveBack() {
      if (right === true) { this.moveRight(); }
      if (left === true) { this.moveLeft(); }
      if (back === false) {
        document.getElementById('heroMove').classList.add('BackB');
        document.getElementById('lArm').classList.add('BackA');
        document.getElementById('rArm').classList.add('BackA');
        document.getElementById('sword').classList.add('BackS');
        back = true;
      } else {
        document.getElementById('heroMove').classList.remove('BackB');
        document.getElementById('lArm').classList.remove('BackA');
        document.getElementById('rArm').classList.remove('BackA');
        document.getElementById('sword').classList.remove('BackS');
        back = false;
      }
    },
    moveForward() {
      if (back === true) { this.moveBack(); }
      if (right === true) { this.moveRight(); }
      if (left === true) { this.moveLeft(); }
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper{
  position: fixed;
  top:50vh;
  transform: translate(-30%,-60%);
}
.hero{
  font-size: 10px;
}
.hBody{
  background: url('../assets/hero/crusaderB.png') no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 14em;
  width: 10em;
  position: relative;
  z-index: 1;
}
.leg{
    background: url('../assets/hero/crusader_leg.png') no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 2.8em;
  width: 2.8em;
  float: left;
  margin-left: 1.8em;
  margin-top:-2.2em;
}

.arm{
  background: url('../assets/hero/crusader_hand1.png') no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 2.8em;
  width: 2.8em;
  float: left;
  margin-left: 0.1em;
  margin-top:-5.7em;
  position: relative;
  z-index: 2;
}
.lArm{
  transform: rotate(90deg);
  margin-left: 7.5em;
  margin-top: -6em;
}
.sword{
  background: url('../assets/hero/Sword.png') no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 17em;
  width: 12em;
  float: left;
  position: fixed;
  z-index: -10;
  margin-left: 1.7em;
  margin-top:-15em;
  transform: rotate(220deg);
}
.heroMove{
  animation: move3 0.9s infinite;
}
.lLeg{
  animation: move0 0.9s infinite;
}
.rLeg{
  animation: move1 0.9s infinite;
}
@keyframes move0 {
  0%{margin-top:-2.2em;}
  50%{margin-top:-2.7em;}
  100%{margin-top:-2.2em;}
}
@keyframes move1 {
  0%{margin-top:-2.7em;}
  50%{margin-top:-2.2em;}
  100%{margin-top:-2.7em;}
}
@keyframes move3 {
  0%{margin-top:0em;}
  50%{margin-top:2em;}
  100%{margin-top:0em;}
}
.LeftB{
  background:url("../assets/hero/crusaderleft.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 14em;
  width: 10em;
  position: relative;
  z-index: 1;
}
.LeftA{
  background: url('../assets/hero/crusader_handside.png') no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 2.8em;
  width: 2.8em;
  float: left;
  margin-left: 3.5em;
  margin-top:-4.6em;
  position: relative;
  z-index: 2;
  transform: rotate(0deg);
}
.LeftL{
  position: fixed;
  margin-left:4em ;
}
.LeftS{
  transform: rotate(200deg);
}
.BackB{
  background:url("../assets/hero/crusader_back.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 14em;
  width: 10em;
  position: relative;
  z-index: 1;
}
.BackA{
  transform: rotate(45deg);
  position: relative;
  z-index: -2;
  margin-top: -6em;
}
.BackS{
  z-index: 4;
  margin-left: -0.5em;
  margin-top:-13.5em ;
}
</style>
