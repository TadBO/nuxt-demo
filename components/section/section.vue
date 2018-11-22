<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="1-4-1"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               text-color="#fff"
               background-color="#1f2a35"
               :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><nuxt-link to="auth">实名认证审核</nuxt-link></el-menu-item>
            <el-menu-item index="1-2"><nuxt-link to="logistic">物流公司审核</nuxt-link></el-menu-item>
            <el-menu-item index="1-3"><nuxt-link to="code">推荐码管理</nuxt-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">角色管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1"><nuxt-link to="power">权限管理</nuxt-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">日志管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><nuxt-link to="log">操作日志</nuxt-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">报表管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1"><nuxt-link to="operate">运营数据统计</nuxt-link></el-menu-item>
            <el-menu-item index="4-2"><nuxt-link to="business">企业数据统计</nuxt-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">发布管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1"><nuxt-link to="notice">发布公告</nuxt-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <div class="close-btn" @click="changeOpen()">
          <i v-if="!isCollapse" class="el-icon-caret-left"></i>
          <i v-else class="el-icon-caret-right"></i>
        </div>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Section',
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeOpen() {
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
  }

  .el-submenu .el-menu-item {
    min-width: auto;
  }

  .close-btn {
    color: #409EFF;
    position: absolute;
    right: -20px;
    top: 50%;
    cursor: pointer;
  }

  .el-container {
    background-color: #f1f4f9;
  }

  .el-main {
    padding: 5px;
  }

  .el-submenu .el-menu-item a {
    text-decoration: none;
    color: #fff;
  }

</style>
