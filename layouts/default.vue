<template style="width: 100%;height: 100%;">
  <div v-if="(!(/sign/g).test($route.path))">
    <Header/>
    <Section/>
    <Footer/>
  </div>
  <div style="width: 100%;height: 100%;" v-else>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '~/components/header/index.vue'
  import Footer from '~/components/footer/index.vue'
  import Section from '~/components/section/section.vue'
  export default {
    components: {
      Header,
      Footer,
      Section
    }
  }
</script>

<style>
html, body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

  #__nuxt, #__layout {
    width: 100%;
    height: 100%;
  }

</style>
