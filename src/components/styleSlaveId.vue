<template>
<!-- 利用float浮动布局进行对从站地址样式进行修改 -->
  <div class="wrapper">

    <div class="header-wrapper">
      <div class="title">SlaveId:</div>
      <button v-for="item in 40" :key="item">2</button>

      <dic class="button-wrapper">
        <button>删除</button>
        <button>33</button>
        <button>33</button>
        <button>33</button>
      </dic>

    </div>

  </div>
</template>

<script>
export default {
  name: "TestEchartsStyleslaveid",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.wrapper {
  width: 30%;
  height: 400px;
  margin: 0 auto;
}
.header-wrapper {
  position: relative;
  height: 200px;
  border: 1px solid pink;

}
.title {
  float: left;
  width: 100px;
  background-color: pink;
}

button{
  margin:2px;
}

.button-wrapper {
  float: right;
  background-color: pink;
}
</style>