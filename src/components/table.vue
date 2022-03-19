 <template>
 <!-- 进行表格上一行拖拽 -->
  <div>
    <el-table ref="dragTable" :data="tableData" style="width: 99%" highlight-current-row current-row-key>
      <el-table-column class="handle" type="index" label="索引" width="50">
      </el-table-column>
      <el-table-column prop="date" label="日期" min-width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template v-slot="slot">
          <el-input v-model="slot.row.name" placeholder="" @input="change"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from "sortablejs";
const data = require("./data.js");
export default {
  name: "TestEchartsTable",

  data() {
    return {
      tableData: JSON.parse(JSON.stringify(data.tableDataRe)),
      // tableData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎1",
      //     address: 1,
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "王小虎2",
      //     address: 2,
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎3",
      //     address: 3,
      //   },
      //   {
      //     date: "2016-05-03",
      //     name: "王小虎4",
      //     address: 4,
      //   },
      // ],
    };
  },

  mounted() {
    // this.initSortTable();

  },

  methods: {
    change() {
      // 实践证明-require是浅拷贝，引入后修改值后原文件的值也在修改；在重新引入后，引入的是修改后的数据；
      require("./data.js").tableDataRe;

    },
    initSortTable() {
      const tableEl = this.$refs.dragTable.$el.querySelector(
        ".el-table__body > tbody"
      );
      console.log("tableEl: ", tableEl);
      // 创建拖拽实例
      Sortable.create(tableEl, {
        disable: false,
        animation: 150,
        ghostClass: "blue-background-class",
        onEnd: () => {
          let tableData = this.$refs.dragTable.tableData;
          console.log("tableData: ", tableData);
          this.$nextTick(() => {
            let data = this.$refs.dragTable;
            console.log("data: ", data);

            let tableData = this.$refs.dragTable.tableData;
            console.log("tableData: ", tableData);
          });
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>