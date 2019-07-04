<template>
  <Title title="Let me Baidu for you">
    <div class="search-container">
      <div v-if="!!search" class="baidu-like">
        <img src="../assets/mouse_arrow.png" ref="mouse" class="mouse">
        <img src="../assets/baidu.jpeg" class="baidu-logo">
        <div>
          <el-input type="text" ref="animate" v-model="searchAnimateValue" autofocus/>
          <el-button v-on:click="mouse()">百度一下</el-button>
        </div>
        <div style="color:red;margin-top:20px;">点击输入框输入你要输入的内容，点击百度一下</div>
      </div>

      <el-form :model="searchValueFrom" ref="searchValueFrom" v-if="!search" @submit.native.prevent>
        <el-form-item
          label
          prop="searchValue"
          :rules="[
      { required: true, message: '你倒是写些玩意啊'},
    ]"
        >
          <el-input
            type="searchValue"
            placeholder="先输入想让我教你搜索的内容"
            v-model="searchValueFrom.searchValue"
            class="input-search"
            autofocus
          >
            <el-button
              type="primary"
              slot="append"
              icon="el-icon-search"
              @click="submitForm('searchValueFrom')"
            />
          </el-input>
        </el-form-item>
      </el-form>
    </div>
  </Title>
</template>

<script>
import Title from "@/components/Title";
import TWEEN from "@tweenjs/tween.js";

export default {
  name: "TeachBaidu",
  components: {
    Title
  },
  data() {
    return {
      search: this.$route.params.search,
      searchValueFrom: {
        searchValue: ""
      },
      searchAnimateValue: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({
            name: "teachBaidu",
            params: { search: this.searchValueFrom.searchValue }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    searchAnimate() {
      if (this.search) {
        this.mouse();
        const searchArray = Array.from(this.search);
        searchArray.map((elem, index) => {
          setTimeout(() => {
            this.searchAnimateValue += elem;
          }, index * 300 + 1000);
        });
        setTimeout(this.openBaidu, searchArray.length * 300 + 2000);
      }
    },
    openBaidu() {
      window.open(`//www.baidu.com/s?wd=${this.search}`, "_self");
    },
    mouse() {
      const vm = this;
      const m = this.$refs.mouse;
      const position = this.$refs.animate.$el.getBoundingClientRect();

      const coords = { x: 0, y: 0 };
      const tween = new TWEEN.Tween(coords)
        .to({ x: position.x + 4, y: position.y + 10 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          m.style.setProperty(
            "transform",
            `translate(${coords.x}px, ${coords.y}px)`
          );
        })
        .start();
      const coords2 = { x: position.x + 4, y: position.y + 10 };

      const tween2 = new TWEEN.Tween(coords2)
        .to({ x: position.x + position.width + 20, y: position.y + 10 }, 1000)
        .delay(this.search.length * 300 + 1000)
        .easing(TWEEN.Easing.Quadratic.Out)

        .onUpdate(() => {
          m.style.setProperty(
            "transform",
            `translate(${coords2.x}px, ${coords2.y}px)`
          );
        })
        .start();
      tween.chain();
      tween2.start();

      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);
      TWEEN.update();
    }
  },
  mounted() {
    const image = new Image();
    image.src = "../assets/baidu.jpeg";
    this.searchAnimate();
  },

  watch: {
    $route() {
      this.search = this.$route.params.search;
      setTimeout(() => {
        this.searchAnimate();
      }, 200);
    }
  }
};
</script>

<style lang="less">
.input-search {
  width: 400px !important;
  max-width: 95%;
}
.search-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20vh;
}
.baidu-like {
  display: flex;
  flex-direction: column;
  align-items: center;
  > img:nth-child(2) {
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    max-width: 90%;
    .el-input {
      height: 36px;
      width: 280px;
      border-color: #4791ff #4791ff;
      border-width: 1px;
      border-right-color: transparent;
    }
    .el-input__inner {
      border-radius: 0px;
      height: 100%;
      padding: 0 5px;
    }
    .el-button {
      width: 100px;
      height: 36px;
      padding: 0;
      border-radius: 0;
      font-size: small;
      font-weight: 400;
      background: #4791ff;
      border: 1px solid #4791ff;
      color: #fff;
    }
  }
}
.baidu-logo {
  width: 200px;
}
.mouse {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
