<template>
  <div>
      <Hero ref="hero"/>
      <div id="Wrapper" class="wrapper">
          <div class="mPice" v-for="item in fields" :key="item" :id="'field' + item"></div>
      </div>
  </div>
</template>
<script>
import Hero from './hero.vue';

let mtG = 0;
let mrG = 0;
let inMove = false;
export default {
  name: 'mape',
  components: {
    Hero,
  },
  data() {
    return {
      fields: 900,
    };
  },
  mounted() {
    // for (let i = 1; i < this.fields + 1;) {
    //   const name = `field${i}`;
    //   const x = Math.floor(Math.random() * 11);
    //   if (x > 0) {
    //     document.getElementById(name).classList.add('random');
    //   }
    //   i += 1;
    // }
    const speed = 100;

    const walk = () => this.$refs.hero.moveMe();
    const up = () => this.$refs.hero.moveBack();
    const left = () => this.$refs.hero.moveLeft();
    const right = () => this.$refs.hero.moveRight();
    const stop = () => this.$refs.hero.moveForward();

    window.oncontextmenu = function x(event) {
      let mT = window.getComputedStyle(document.querySelector('#Wrapper')).top;
      let mR = window.getComputedStyle(document.querySelector('#Wrapper')).right;
      mT = Number((mT).match(/\d+$/));
      mR = Number((mR).match(/\d+$/));
      const center = { w: window.innerWidth, h: window.innerHeight };
      let way = 0;
      let wayX = 0;
      let wayY = 0;
      if (center.h / 2 < event.clientY) {
        mT += (center.h / 2) - event.clientY;
        way = -mT;
        wayY = -mT;
        mT = mtG + mT;
      } else {
        mT += (event.clientY - (center.h / 2));
        way = -mT;
        wayY = -mT;
        mT = mtG - mT;
      }
      if (center.w / 2 > event.clientX) {
        mR += (center.w / 2) - event.clientX;
        way += mR;
        wayX = mR;
        mR = mrG - mR;
      } else {
        mR += (event.clientX - (center.w / 2));
        way += mR;
        wayX = mR;
        mR = mrG + mR;
      }
      if (inMove === false) {
        inMove = true;
        // eslint-disable-next-line no-undef
        mtG = mT;
        mrG = mR;
        document.getElementById('Wrapper').style.transition = `${way / speed}s`;
        document.getElementById('Wrapper').style.top = `${mT}px`;
        document.getElementById('Wrapper').style.right = `${mR}px`;
        if (wayY > wayX) {
          if (center.h / 2 > event.clientY) { up(); }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (center.w / 2 < event.clientX) { right(); } else { left(); }
        }
        walk();
        setTimeout(() => {
          walk();
          stop();
          inMove = false;
        }, (way * 1000) / speed);
      } else {
        //
      }
      return false;
    };
  },
  methods: {
  },
};

</script>

<style scoped lang="scss">
    .wrapper{
        position: fixed;
        top:0;
        right:0;
        z-index: -20;
        transform: translate(50%,-50%);
        height: 2500px;
        width: 2500px;
        transition: 2s;
        transform:scale(20);
    }
    .mPice{
        float: left;
        background-color:#303030;
        width: calc(100% / 30);
        height: calc(100% / 30);
        margin: 0;
        padding: 0;
        background-image: url('../assets/Mbg.jpg');
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        position: relative;
        z-index: 500;
    }
    .random{
      background-image: url('../assets/Mbg1.jpg');
    }
</style>
