<template>
  <div class="Fawen">
    <el-header>
      <NavHeader/>
    </el-header>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/fError">fError</router-link>
    </div>-->
    <el-container class="main-container">
      <router-view/>
    </el-container>
    <el-footer class="footer">
      <div>All for fun!~</div>

      <a
        class="footer_text"
        href="http://www.miitbeian.gov.cn"
        target="_blank"
        style="margin-top:10px;"
      >京ICP备18029980号-1</a>
    </el-footer>
  </div>
</template>
<script>
import NavHeader from "./components/NavHeader.vue";
export default {
  components: {
    NavHeader
  }
};
</script>

<style lang="less">
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.Fawen {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &:before,
  &:after {
    box-sizing: border-box;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 0px;
  font-size: small;
  > a {
    text-decoration: none;
    color: #409fff;
    opacity: 0.2;
  }
}
.main-container {
  flex: 1;
}
</style>
