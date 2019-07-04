<template>
  <!-- <main>
    <section>
      <h1>发消息排行Top 5</h1>
    </section>

    <section v-scroll-reveal.reset>
      <h1>Tada!</h1>
    </section>

    <section v-scroll-reveal.reset="{ delay: 250 }">
      <h1>Slightly late tada!</h1>
    </section>
  </main>-->
  <Title title="Group-analyse">
    <el-table
      :data="list"
      style="width:100%;"
      height="500px"
      :default-sort="{prop: 'messageSum', order: 'descending'}"
    >
      <el-table-column type="expand" fixed="left">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="图片占比">
              <p>
                <span>{{ props.row.imgPercent }} %</span>
                <span v-if="+props.row.imgPercent > 0">
                  &nbsp;平均每10句话就有
                  <b>{{ +(0.1 * props.row.imgPercent).toFixed(4)}}&nbsp;</b>次发送图片（含表情包）
                </span>
              </p>
            </el-form-item>
            <el-form-item label="捂脸占比">
              <p>
                <span>{{ props.row.wulianPercent }} %</span>
                <span v-if="+props.row.wulianPercent > 0">
                  &nbsp;平均每10句话就有
                  <b>{{ +(0.1 * props.row.wulianPercent).toFixed(4)}}&nbsp;</b>次发送的消息中含有捂脸表情
                </span>
              </p>
            </el-form-item>
            <el-form-item label="奸笑占比：">
              <p>
                <span>{{ props.row.jianxiaoPercent }} %</span>
                <span v-if="+props.row.jianxiaoPercent > 0">
                  &nbsp;平均每10句话就有
                  <b>{{ +(0.1 * props.row.jianxiaoPercent).toFixed(4)}}&nbsp;</b>次发送的消息中含有奸笑表情
                </span>
              </p>
            </el-form-item>
            <el-form-item label="？？？占比：">
              <p>
                <span>{{ props.row.questionPercent }} %</span>
                <span v-if="+props.row.questionPercent > 0">
                  &nbsp;平均每10句话就有
                  <b>{{ +(0.1 * props.row.questionPercent).toFixed(4)}}&nbsp;</b>次发送的消息中含有”？？？“
                </span>
              </p>
            </el-form-item>
            <el-form-item label="哈哈哈占比：">
              <p>
                <span>{{ props.row.hahaPercent }} %</span>
                <span v-if="+props.row.hahaPercent > 0">
                  &nbsp;平均每10句话就有
                  <b>{{ +(0.1 * props.row.hahaPercent).toFixed(4)}}&nbsp;</b>次发送的消息中含有”哈哈哈“
                </span>
              </p>
            </el-form-item>
            <el-form-item label="傻逼占比：">
              <p>
                <span>{{ props.row.shabiPercent }} %</span>
                <span v-if="+props.row.shabiPercent > 0">
                  &nbsp;平均每10句话就有
                  <b>{{ +(0.1 * props.row.shabiPercent).toFixed(4)}}&nbsp;</b>次发送的消息中含有”傻逼“
                </span>
              </p>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column sortable prop="name" label="姓名" fixed="left"></el-table-column>
      <el-table-column sortable prop="messageSum" label="总数"></el-table-column>
      <el-table-column sortable prop="imgSum" label="图片"></el-table-column>
      <el-table-column sortable prop="wulianSum" label="捂脸"></el-table-column>
      <el-table-column sortable prop="jianxiaoSum" label="奸笑"></el-table-column>
      <el-table-column sortable prop="questionSum" label="？？？"></el-table-column>
      <el-table-column sortable prop="hahaSum" label="哈哈哈"></el-table-column>
      <el-table-column sortable prop="emojiSum" label="表情包"></el-table-column>
      <el-table-column sortable prop="shabiSum" label="傻逼"></el-table-column>
    </el-table>
  </Title>
</template>
<script>
import moment from "moment";
import ICountUp from "vue-countup-v2";
import Stat from "../stat.json";
import VueScrollReveal from "vue-scroll-reveal";
import Vue from "vue";
import Title from "@/components/Title";
import _ from "lodash";

Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: "10px",
  mobile: false
});

export default {
  name: "WeChartGroup",
  components: {
    ICountUp,
    Title
  },
  data() {
    const list = Stat.map(item => {
      Object.keys(item).map(key => {
        let value = (item[key] * 100) / item.messageSum;
        if (value > 0 && value < 0.04) {
          value = "小于0.01";
        } else {
          value = value.toFixed(2);
        }
        item[`${key.slice(0, key.length - 3)}Percent`] = value;
      });
      return item;
    });
    return {
      list: list
    };
  }
};
</script>
<style lang="less" scoped>
section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>
