<template>
  <BackgroundVue></BackgroundVue>
</template>

<script>
  import BackgroundVue from './components/Background.vue';
export default {
  name: 'App',
  components:{
    BackgroundVue
  }
}
</script>


<style scoped>
h1 {
  display: flex;
  width: 100%;
  align-self: auto;
}
main {
  background-color: red;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 300px;
  width: auto;
}
</style>
