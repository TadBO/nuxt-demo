<template>
  <section>
    <!--面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>实名审核</el-breadcrumb-item>
    </el-breadcrumb>
    <!--查询部分-->
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名">
            <el-input v-model="formInline.name" placeholder="姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="状态">
              <el-option label="" value=""></el-option>
              <el-option label="未审核" value="0"></el-option>
              <el-option label="认证通过" value="1"></el-option>
              <el-option label="审核未通过" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col style="text-align: center;">
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--表格-->
    <el-table
      :data="tableData"
      v-loading="loading"
      border
      stripe
      style="width: 100%"
      header-cell-class-name="my-header"
      cell-class-name="my-cell">
      <el-table-column
        fixed
        label="序号"
        width="80"
        align="center">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="姓名"
        align="center">
      </el-table-column>
      <el-table-column
        fixed
        prop="phoneNo"
        label="联系方式"
        align="center">
      </el-table-column>
      <el-table-column
        fixed
        prop="idCard"
        label="身份证号码"
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        fixed
        prop="statusName"
        label="审核状态"
        align="center">
      </el-table-column>
      <el-table-column
        fixed
        prop="statusName"
        label="审核操作"
        align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small">详情</el-button>
          <el-button type="text" size="small">通过</el-button>
          <el-button type="text" size="small">不通过</el-button>
        </template>
      </el-table-column>
      <el-table-column
        fixed
        prop="statusName"
        label="审核状态"
        align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column
        fixed
        prop="auditTime"
        label="审批时间"
        align="center">
      </el-table-column>
      <el-table-column
        fixed
        prop="auditor"
        label="操作员"
        align="center">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="formInline.pageIndex"
      :page-sizes="[10, 20, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </section>
</template>

<script>
  export default {
    name: 'auth',
    data() {
      return {
        formInline: {
          name: '',
          status: '',
          pageIndex: 0,
          pageSize: 10
        },
        tableData: [],
        total: 0,
        loading: true
      }
    },
    created() {
      this.getTableData();
    },
    methods: {
      onSubmit() {
        this.getTableData();
      },
      reset() {
        this.formInline = {
          name: '',
          status: ''
        }
      },
      handleSizeChange(val) {
        this.formInline.pageSize = val;
        this.getTableData();
      },
      handleCurrentChange(val) {
        this.formInline.pageIndex = val - 1;
        this.getTableData();
      },
      getTableData() {
        const params = this.dataToFrom();
        this.loading = true;
        this.$axios('/api/user/certification/auditapply/list', {
          method: 'post',
          data: params + `t=${Math.random()}`
        }).then(res => {
          this.tableData = res.data.data.result.resultList;
          this.total = res.data.data.result.total;
          this.loading = false;
        });
      },
      dataToFrom() {
        let serach = '';
        for (let key in this.formInline) {
          serach += key + '=' + this.formInline[key] + '&'
        }
        return serach;
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-breadcrumb {
    height: 30px;
    line-height: 30px;
  }

  .el-form {
    padding: 10px;
    background-color: #fff;
  }

  .el-input, .el-select {
    width: 300px;
  }

  .el-table {
    margin-top: 20px;
  }

  .el-table tr td, .el-table tr th {
    padding: 10px 0;
    text-align: center;
  }
  .el-pagination {
    background: #fff;
    padding: 10px 5px;
  }
  .my-header {
    padding: 10px 0;
  }
  .my-cell {
    padding: 10px 0;
  }
</style>
