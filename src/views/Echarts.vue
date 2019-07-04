<template>
  <Title title="Echarts示例">
    <v-chart :options="polar" class="echarts-ex" theme="green" autosize/>
    <v-chart :options="bar" class="echarts-ex" theme="green" autosize/>
  </Title>
</template>
<script>
import Title from "@/components/Title";
export default {
  name: "EchartsExample",
  components: {
    Title
  },
  methods: {},

  data() {
    var randomize = () => {
      return [0, 0, 0].map(v => {
        return Math.round(300 + Math.random() * 700) / 10;
      });
    };
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    const polar = {
      title: {
        text: ""
      },
      legend: {
        data: ["line"]
      },
      polar: {
        center: ["50%", "54%"]
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      angleAxis: {
        type: "value",
        startAngle: 0
      },
      radiusAxis: {
        min: 0
      },
      series: [
        {
          coordinateSystem: "polar",
          name: "line",
          type: "line",
          showSymbol: false,
          data: data
        }
      ],
      animationDuration: 2000
    };
    const bar = {
      legend: {},
      tooltip: {},
      dataset: {
        // Provide data.
        source: [
          ["Product", "2015", "2016", "2017"],
          ["Matcha Latte", ...randomize()],
          ["Milk Tea", ...randomize()],
          ["Cheese Cocoa", ...randomize()],
          ["Walnut Brownie", ...randomize()]
        ]
      },
      // Declare X axis, which is a category axis, mapping
      // to the first column by default.
      xAxis: { type: "category" },
      // Declare Y axis, which is a value axis.
      yAxis: {},
      // Declare several series, each of them mapped to a
      // column of the dataset by default.
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
    };
    return { polar, bar };
  }
};
</script>
<style lang="less" scoped>
.echarts-ex {
  margin: 20px auto;
  width: 70%;
  min-width: 500px;
}
</style>

