<template>
  <el-main>
    <slot></slot>
  </el-main>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "Title",
  props: ["title"],
  methods: {
    ...mapMutations(["setTitle"])
  },
  mounted() {
    this.setTitle(this.title);
  },
  updated() {
    this.setTitle(this.title);
  },
  beforeDestroy() {
    this.setTitle("Fawen-Lab");
  }
};
</script>
