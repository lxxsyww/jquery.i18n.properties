<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
