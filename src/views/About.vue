<template>
  <div class="about">
    <div
      data-tilt
      data-tilt-glare="true"
      data-tilt-max-glare="0.5"
      data-tilt-speed="400"
      data-tilt-scale="1.1"
      data-tilt-max="20"
      data-tilt-perspective="500"
      class="about-name"
    >
      <h2>Fawen</h2>
    </div>
    <h1>This is Fawen Lab</h1>
  </div>
</template>

<script>
import Tilt from 'vanilla-tilt';

export default {
  name: 'About',
  mounted() {
    Tilt.init(document.querySelector('.about-name'));
  },
};
</script>


<style lang="less" scoped>
.about {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > .about-name {
    &:extend(.about);
    height: 250px;
    width: 250px;
    background: linear-gradient(135deg, #1e9fff, #51e282);
    margin-block-end: 50px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    border-radius: 20px;
    > h2 {
      color: #fff;
      font-size: 50px;
      transform: translateZ(20px);
    }
  }
}
</style>
