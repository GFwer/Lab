<template>
  <div class="header">
    <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="item in menu" v-bind:key="item.url" v-bind:index="item.url">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    }
  },
  data() {
    return {
      menu: [{ name: "主页", url: "/" }, { name: "关于", url: "/about" }],
      active: location.pathname
    };
  },
  created() {},
  beforeCreate() {}
};
</script>

<style scoped lang="less">
.header {
  margin-bottom: 20px;
}
</style>
