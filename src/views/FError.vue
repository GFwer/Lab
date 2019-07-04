<template>
  <Title title="FError">
    <div class="f-error">
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
  </Title>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Title from "@/components/Title";

export default {
  name: "FError",
  components: {
    HelloWorld,
    Title
  },
  data() {
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
.f-error {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > button {
    margin-top: 30px;
  }
}
</style>
