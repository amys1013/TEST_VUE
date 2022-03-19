<template>
  <div id="app">
    <!-- <Test></Test> -->
    <!-- <testExpress/> -->
    <!-- <Table2></Table2> -->
    <StyleSlaveId></StyleSlaveId>
  </div>
</template>

<script>
// import Test from "./components/Test.vue";
// import testExpress from "./components/testExpress.vue";
// import Table2 from "./components/table_02.vue";
import StyleSlaveId from "./components/styleSlaveId.vue";

export default {
  name: "App",
  components: {
    // Test,
    // testExpress

    // Table2, // 侧边栏收缩从而使右边表格el-table接收到浏览器尺寸变化；从而el-table自适应；
    StyleSlaveId,
  },
};
</script>

<style scope>
body {
  width: 100%;
  height: 540px;
  margin: 0px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
