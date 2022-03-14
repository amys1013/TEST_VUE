<template>
  <div class="wrapper">
    <div class="left">

      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="right">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px; width:100%">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <Table />
    </div>

  </div>
</template>

<script>
/**
 * 出现了左边侧边栏撑开，但是右边表格的宽度不变，从而出现了滚动条；并且浏览器放大，表格设置了Min-width会变大，但是变小则不会变小
 * 目的：要使右边表格自适应右边的宽度，并且浏览器变小的时候列也变小，不能只变宽；
 */

/**
 * el-table设置宽度不是100%就可以，为啥？？--缺点：
 * table的宽度是table监听到了浏览器尺寸的变化，利用js来变化的
 * 拉宽就可以，拉窄就不可以？---flex = 1的时候会自动收缩和填满剩余的空间，如果里面有内容的时候，flex = 1的容器不会小于里面内容的宽度【，默认情况下】
 *解决：el-table的宽度已经将父级的宽度充满，父亲flex = 1，则无法再缩小，则el-table无法再缩小
  则解决的方法1：父亲设置overflow:auto，
        方法2：父亲 min-width:0
  总而言之，要el-table接收到浏览器缩放的事件
 */
import Table from "./table.vue";
export default {
  components: {
    // Test,
    // testExpress
    Table,
  },
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
.left {
  height: 100%;
  background-color: red;
}
.right {
  flex: 1;
  height: 100%;
  background-color: pink;

  /* 重要点 */
  overflow: auto;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>