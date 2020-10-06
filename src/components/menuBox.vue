<template>
  <div class="box boxBlind" :id="index" >
    <div @click="close()">
      <img src='../assets/box.png'/>
      <div class="string" >{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuBox',
  data() {
    return {
    };
  },
  props: ['index', 'msg'],
  mounted() {
    this.flash();
  },
  methods: {
    flash() {
      const name = `${this.index}`;
      document.getElementById(name).style.opacity = '0';
      setTimeout(() => {
        document.getElementById(name).style.opacity = '1';
      }, 3600);
    },
    close() {
      if (this.index === 'box4') {
        window.close();
      }
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
