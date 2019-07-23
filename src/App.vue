<template>
  <div id="app">
    <v-header></v-header>
    <router-view class="route-body"/>
    <v-tail></v-tail>
  </div>
</template>

<script>
import header from './components/index/header'
import tail from './components/index/tail'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-tail' : tail
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.route-body{
  padding-top: 45px;
}
</style>
