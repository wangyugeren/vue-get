<template>
  <div id="app">
    <router-view></router-view>
    <loading></loading>
  </div>
</template>
<script>
import Loading from './components/Loading'
export default {
  name: 'app',
  components:{
  	Loading
  }
}
</script>

