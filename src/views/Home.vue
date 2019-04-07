<template>
  <div class="home">
    <router-link to="/fError">FError</router-link>
    <router-link to="/teachBaidu">Let me Baidu for you</router-link>
    <router-link to="/yearProgress">Year Progress</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
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
