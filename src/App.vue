<template>
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <CTitle></CTitle>
  <div class="content">
    <CTable></CTable>
    <CCard></CCard>
  </div>
</template>

<script>
import CTable from './components/CTable.vue'
import CTitle from './components/CTitle.vue';
export default {
  name: 'App',
  components:{
    CTable,
    CTitle
  }
}
</script>

<style scoped>
body {
  margin:0;
}

.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgb(255, 251, 0) 50%, rgb(0, 0, 0) 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-55%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

.content {
  background-color:rgba(255,255,255,.8);
  border-radius:.25em;
  box-shadow:0 0 .25em rgba(0,0,0,.25);
  box-sizing:border-box;
  width: 90%;
  left:50%;
  display: flex;
  padding:20px;
  position:fixed;
  text-align:center;
  top:55%;
  transform:translate(-50%, -50%);
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

h1 {
  display: flex;
  width: 100%;
  align-self: auto;
  font-family:monospace;
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
