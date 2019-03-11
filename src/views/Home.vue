<template>
  <div class="home">
    <router-link to="/fError">fError</router-link>
    <router-link to="/teachBaidu">让我来教你怎么百度</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="less">
.home {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > a {
    margin: 10px;
    text-align: center;
  }
}
a {
  text-decoration: none;
  color: #409fff;
}
</style>
