<template>
  <div class="home">
    <HelloWorld msg="冯浩铭错了！！！"/>
    <transition name="el-zoom-in-center">
      <img
        src="@/assets/loading.jpg"
        alt
        class="background"
        v-show="bgShow"
        v-on:click="bgShow=!bgShow;"
      >
    </transition>
    <el-button v-on:click="bgShow=!bgShow;open();">Suprise~</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      bgShow: false
    };
  },
  methods: {
    open() {
      this.$message.error("你玩大了兄弟");
    }
  }
};
</script>

<style lang="less">
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100vw;
  margin: 0 auto;
}
</style>
