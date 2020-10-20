<template>
    <div class="holder">
      <span class="text">{{name}} :</span>
      <input type="range" min="0" max="99" :value="nValue" class="slider" :id="name">
      <span :id="numberN" class="info">{{nValue}}</span>
    </div>
</template>

<script>
export default {
  name: 'slide',
  data() {
    return {
    };
  },
  props: ['name', 'numberN', 'nValue'],
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.slider {
  -webkit-appearance: none;
  width: 60%;
  height: 10px;
  border-radius: 2px;
  background: black;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-top:2em;
  margin-left: -2em;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  background:url('../assets/cross.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  background: url('../assets/cross.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
  cursor: pointer;
}
.info{
  position: relative;
  font-size: 2em;
  margin-left: 1em;
}
.holder{
  font-size: 1.3vw;
  margin-top: 2em;
}
.text{
  margin-right: 2em;
  font-size: 1.3em;
  text-transform: uppercase;
}
</style>
