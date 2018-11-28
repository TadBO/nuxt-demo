<template>
  <section>
    <!--面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>物流公司审核</el-breadcrumb-item>
    </el-breadcrumb>
    <!--查询部分-->
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline">
      <el-row>
        <el-col :span="12">
          <el-form-item label="企业名">
            <el-input v-model="formInline.enterprisesName" placeholder="企业名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="状态">
              <el-option label="" value=""></el-option>
              <el-option label="未审核" value="1"></el-option>
              <el-option label="认证通过" value="2"></el-option>
              <el-option label="审核未通过" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col style="text-align: center;">
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit">查询
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--表格部分-->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        align="center"
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="统一代码">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="企业联系人">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="企业名">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="企业简称">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="营业执照">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="道路许可证">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="座机">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="经营地址">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="审核状态">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="审批时间">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="审批人">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        formInline: {
          enterprisesName: '',
          status: ''
        },
        tableData: []
      }
    },
    methods: {
      onSubmit() {

      },
      reset() {

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
</style>
