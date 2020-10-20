<template>
  <div class="fog" >
      <div class="fog1"></div>
      <div class="fog2"></div>
      <div class="fog3"></div>
      <div class="fog4"></div>
  </div>
</template>

<script>
export default {
  name: 'darkFog',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.fog{
    position: fixed;
    top: 50vh;
    height:6000%;
    width:5000%;
    transition:2s ;
    transform:translate(-50%,-50%);
    pointer-events: none;
}
.fog>div{
    float: left;
}
.fog1{
    background: linear-gradient(to bottom right,
     rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 55%,rgba(0, 0, 0, 0.6) 75%,rgba(0, 0, 0, 0)100%);
    width: 50%;
    height:50%;
    border-radius: 50%,50%,50%,50%;
}
.fog2{
    background: linear-gradient(to bottom left,
       rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 55%,rgba(0, 0, 0, 0.6) 75%,rgba(0, 0, 0, 0)100%);
    width: 50%;
    height:50%;
}
.fog3{
    background: linear-gradient(to top right,
    rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 55%,rgba(0, 0, 0, 0.6) 75%,rgba(0, 0, 0, 0)100%);
    width: 50%;
    height:50%;
}
.fog4{
    background: linear-gradient(to top left,
 rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 55%,rgba(0, 0, 0, 0.6) 75%,rgba(0, 0, 0, 0)100%);
    width: 50%;
    height:50%;
}
</style>
