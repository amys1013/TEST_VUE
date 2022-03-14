<template>
  <div>

    <span>{{testData}}</span>

    <el-table :data="testData" ref="tableRef" style="width: 100%" highlight-current-row current-row-key fit
      @row-click="handleClick">
      <el-table-column type="index" label="index" width="60">
      </el-table-column>
      <el-table-column prop="age" label="age">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
// var echarts = require("echarts");
import { debounce } from "lodash";
export default {
  name: "charts",
  data() {
    return {
      obj3: {
        x: {
          name: "mao",
          age: 24,
        },
        y: {
          name: "mao",
          age: 24,
        },
      },
    };
  },
  computed: {
    testData() {
      return Object.values(this.obj3);
    },
  },
  mounted() {
    console.log("6");
  },
  methods: {
    handleClick() {
      console.log("this.$refs.tableRef: ", this.$refs.tableRef);
    },
  },
};
</script>




<style scoped>
* {
  padding: 0px;
  margin: 0px;
  border: none;
}
#main {
  width: 600px;
  height: 600px;
  background-color: rgb(209, 184, 184);
}
</style>
