<template style="width: 100%;height: 100%;">
   <div class="body">
      <div class="container">
        <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <h3 class="form-title">LOGIN</h3>
          <el-form-item label="用户名" prop="pass">
            <el-input type="text" v-model="ruleForm2.userName" autocomplete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.password" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
   </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        ruleForm2: {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      submitForm() {
        if (!this.ruleForm2.userName || !this.ruleForm2.password) {
          this.$message.error('用户名密码不能为空！');
          return false;
        }
        const url = `/api/login/dologin?userName=${this.ruleForm2.userName}&password=${this.ruleForm2.password}`;
        this.$axios.$get(url).then((res) => {
          this.$router.push({path: '/'})
        }).catch(error => {
          this.$message.error('用户名或密码错误！');
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  html, body {
    width: 100%;
    height: 100%;
  }
  .body {
    width: 100%;
    height: 100%;
    background: url("~assets/images/login_bg.jpg") 100% 100%;
    .container {
      width: 100%;
      height: 100%;
      position: absolute;
      .el-form {
        padding: 10px;
        background: rgba(255,255,255,0.3);
        width: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .form-title {
          font-size: 24px;
          margin: 20px 0 10px 100px;
          font-weight: 500;
          line-height: 1.1;
        }
      }
    }
  }
</style>
