<template>
  <div class="container">
    <!-- <span>{{percent}}</span> -->
    <div class="progress" v-bind:style="{width:`${percent}%`}"></div>
    <span class="progress-label">
      <ICountUp :endVal="percent" :options="options" @ready="onReady"/>%
    </span>
  </div>
</template>
<script>
import moment from "moment";
import ICountUp from "vue-countup-v2";

export default {
  name: "YearProgress",
  components: {
    ICountUp
  },
  data() {
    return {
      percent: 0,
      options: {
        useEasing: false,
        useGrouping: false,
        separator: ",",
        decimalPlaces: "8",
        prefix: "",
        suffix: ""
      },
      //end of this year
      end: moment()
        .endOf("year")
        .unix(),
      start: moment()
        .startOf("year")
        .unix(),
      timer: null
    };
  },
  methods: {
    getCurrentPercent() {
      const current = moment().unix() - this.start;
      const length = this.end - this.start;
      this.percent = (current * 100) / length;
    },
    onReady: function(instance, CountUp) {
      const that = this;
      instance.update(that.endVal + 1000);
    }
  },
  mounted() {
    this.timer = setInterval(this.getCurrentPercent, 1000);
  },
  beforeDestroy() {}
};
</script>
<style lang="less" scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
}
@keyframes fromZero {
  from {
    width: 0;
  }
}
.progress {
  background-color: red;
  transition: all linear;
  animation: fromZero 10s cubic-bezier(0.09, 0.46, 0, 0.98) both;
  animation-delay: 1s;
}
.progress-label {
  position: fixed;
  bottom: 15px;
  left: 15px;
  font-size: 20px;
}
</style>
