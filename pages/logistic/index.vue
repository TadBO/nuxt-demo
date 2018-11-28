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
      v-loading="loading"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        align="center"
        label="序号"
        width="50">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="enterprisesCode"
        align="center"
        label="统一代码">
      </el-table-column>
      <el-table-column
        prop="enterprisesContacts"
        align="center"
        label="企业联系人">
      </el-table-column>
      <el-table-column
        prop="enterprisesName"
        align="center"
        label="企业名">
      </el-table-column>
      <el-table-column
        prop="enterpriseAbbreviation"
        align="center"
        label="企业简称">
      </el-table-column>
      <el-table-column
        prop="businessLicence"
        align="center"
        label="营业执照">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="roadTransportLicense"
        align="center"
        label="道路许可证">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="specialPlane"
        align="center"
        label="座机">
      </el-table-column>
      <el-table-column
        prop="businessAddress"
        align="center"
        label="经营地址">
      </el-table-column>
      <el-table-column
        prop="createTime"
        align="center"
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="auditStatusName"
        align="center"
        label="审核状态">
      </el-table-column>
      <el-table-column
        prop="auditTime"
        align="center"
        label="审批时间">
      </el-table-column>
      <el-table-column
        prop="auditor"
        align="center"
        label="审批人">
      </el-table-column>
    </el-table>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="formInline.pageIndex + 1"
            :page-sizes="[10, 20, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        formInline: {
          enterprisesName: '',
          status: '',
          pageIndex: 0,
          pageSize: 10
        },
        total: 0,
        tableData: [],
        loading: false
      }
    },
    created() {
      this.getTableData();
    },
    methods: {
      onSubmit() {
        this.formInline.pageIndex = 0;
        this.formInline.pageSize = 10;
        this.getTableData();
      },
      reset() {
        this.formInline = {
          enterprisesName: '',
          status: '',
          pageIndex: 0,
          pageSize: 10
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
      dataToFrom() {
        let serach = '';
        for (let key in this.formInline) {
          serach += key + '=' + this.formInline[key] + '&'
        }
        return serach + 't=' + Math.random();
      },
      getTableData() {
        let searh = this.dataToFrom();
        this.loading = true;
        this.$axios('/api/user/logisticsenterprises/auditapply/list', {
          method: 'post',
          data: searh
        }).then(res => {
          this.tableData = res.data.data.result.resultList;
          this.total = res.data.data.result.total;
          this.loading = false;
        });
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

  .el-pagination {
    padding: 5px;
    background: #fff;
  }
</style>
