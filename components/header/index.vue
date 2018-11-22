<template>
  <div class="header">
    <nuxt-link to="/" class="logo">
      <img src="~assets/images/logo.png" alt="logo">
    </nuxt-link>
    <div class="remind">
      <span class="headPicture"></span>
      <span class="who">欢迎您，{{ username }}</span>
      <span class="el-icon-info logout" @click="logout()"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        username: 'admin'
      }
    },
    methods: {
      logout() {
        console.log('退出')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import 'index';
</style>
